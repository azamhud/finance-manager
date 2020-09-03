<template>
  <div>
    <div class="main__title">
      FINANCE
    </div>
    <div class="main__body">
      <b-nav class="tabs" tabs>
        <b-nav-item :active="isAccount" @click="selectAccount"
          >Account</b-nav-item
        >
        <b-nav-item :active="!isAccount" @click="selectTransaction"
          >Transaction</b-nav-item
        >
      </b-nav>

      <button
        v-if="isAccount"
        class="btn btn-primary btn-create"
        @click="openModalCreateAccount"
      >
        Create New Account
      </button>

      <button
        v-else
        class="btn btn-primary btn-create"
        @click="openModalCreateTransaction"
      >
        Create New Transaction
      </button>
      <TableAccount
        v-if="isAccount"
        :dataAccount="dataAccount"
        @get-data="handleGetDataAccount"
        @view-data="handleViewDataAccount"
        @edit-data="handleEditDataAccount"
        @delete-data="handleDeleteDataAccount"
      />

      <TableTransaction
        v-if="!isAccount"
        :dataTransaction="dataTransaction"
        @get-data="handleGetDataTransaction"
        @view-data="handleViewDataTransaction"
        @edit-data="handleEditDataTransaction"
        @delete-data="handleDeleteDataTransaction"
      />

      <b-pagination
        v-model="page"
        :total-rows="totalSize"
        :per-page="size"
        aria-controls="my-table"
        align="center"
      >
        <span slot="first-text"></span>

        <span slot="prev-text" class="pagination__action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#777777"
            stroke-width="3"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </span>
        <span slot="next-text" class="pagination__action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#777777"
            stroke-width="3"
            stroke-linecap="square"
            stroke-linejoin="arcs"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </span>

        <span slot="last-text"></span>
      </b-pagination>
    </div>

    <b-modal id="modal-account-delete">
      <div class="text-center">Delete {{ this.selected.name }}</div>
      <div class="text-center">
        Are you sure?
      </div>
      <template v-slot:modal-footer="{ close }">
        <button
          class="btn btn-outline-secondary btn-sm"
          @click.prevent="doDeleteAccountFinance"
        >
          Delete
        </button>
        <button class="btn btn-modal btn-sm" @click.prevent="close()">
          Cancel
        </button>
      </template>
    </b-modal>

    <b-modal id="modal-account">
      <template v-slot:modal-header="{ close }">
        <div class="title">
          <div class="tag">Finance</div>
          <span v-if="modalInfo.modalType === 'CREATE'">Create New</span>
          <span v-else-if="modalInfo.modalType === 'VIEW'">View</span>
          <span v-else-if="modalInfo.modalType === 'EDIT'">Edit</span> Account
        </div>
        <button type="button" aria-label="Close" class="close" @click="close()">
          x
        </button>
      </template>
      <div>
        <div>Account Name<span class="text-red">*</span></div>
        <input
          class="modal-body__input"
          :disabled="modalInfo.modalType === 'VIEW'"
          id="input-name-account"
          v-model="modalInfo.name"
          placeholder="e.g. cash, bank, etc"
          required
        />

        <div class="mt-2">Type</div>
        <input
          class="modal-body__input"
          :disabled="modalInfo.modalType === 'VIEW'"
          id="input-type-account"
          v-model="modalInfo.type"
          placeholder="e.g. cash/bank/ewallet"
          required
        />

        <div class="mt-2">Description</div>
        <input
          class="modal-body__input"
          :disabled="modalInfo.modalType === 'VIEW'"
          id="input-desc-account"
          v-model="modalInfo.description"
          required
        />
      </div>
      <template v-slot:modal-footer="{ close }">
        <button
          class="btn btn-modal btn-sm"
          v-if="modalInfo.modalType === 'CREATE'"
          :disabled="
            modalInfo.name === '' ||
              modalInfo.description === '' ||
              modalInfo.type === ''
          "
          @click.prevent="doAddAccountFinance"
        >
          Tambahkan
        </button>
        <button
          class="btn btn-modal btn-sm"
          v-if="modalInfo.modalType === 'EDIT'"
          :disabled="
            modalInfo.name === '' ||
              modalInfo.description === '' ||
              modalInfo.type === ''
          "
          @click.prevent="doEditAccountFinance"
        >
          Edit
        </button>
        <button
          v-if="modalInfo.modalType === 'VIEW'"
          class="btn btn-outline-secondary btn-sm"
          @click.prevent="close()"
        >
          Tutup
        </button>
        <button
          v-else
          class="btn btn-outline-secondary btn-sm"
          @click.prevent="close()"
        >
          Batal
        </button>
      </template>
    </b-modal>

    <b-modal id="modal-transaction-delete">
      <div class="text-center">Delete {{ this.selected.title }}</div>
      <div class="text-center">
        Are you sure?
      </div>
      <template v-slot:modal-footer="{ close }">
        <button
          class="btn btn-outline-secondary btn-sm"
          @click.prevent="doDeleteTransactionFinance"
        >
          Delete
        </button>
        <button class="btn btn-modal btn-sm" @click.prevent="close()">
          Cancel
        </button>
      </template>
    </b-modal>

    <b-modal id="modal-transaction">
      <template v-slot:modal-header="{ close }">
        <div class="title">
          <div class="tag">Finance</div>
          <span v-if="modalInfoTransaction.modalType === 'CREATE'"
            >Create New</span
          >
          <span v-else-if="modalInfoTransaction.modalType === 'VIEW'"
            >View</span
          >
          <span v-else-if="modalInfoTransaction.modalType === 'EDIT'"
            >Edit</span
          >
          Transaction
        </div>
        <button type="button" aria-label="Close" class="close" @click="close()">
          x
        </button>
      </template>
      <div>
        <div>Title<span class="text-red">*</span></div>
        <input
          class="modal-body__input"
          :disabled="modalInfoTransaction.modalType === 'VIEW'"
          id="input-name-finance"
          v-model="modalInfoTransaction.title"
          placeholder="Input your finance name"
          required
        />

        <div class="mt-2">Finance Account</div>
        <input
          v-if="modalInfoTransaction.modalType === 'VIEW'"
          class="modal-body__input"
          :disabled="modalInfoTransaction.modalType === 'VIEW'"
          id="input-type-account"
          v-model="modalInfoTransaction.type"
          required
        />
        <v-select
          v-else
          class="dropdown dropdown-unique w-90"
          placeholder="Choose here"
          label="name"
          v-model="modalInfoTransaction.id"
          :reduce="item => item.id"
          :options="listAccount"
        ></v-select>

        <div class="mt-2">Debit Amount</div>
        <input
          class="modal-body__input"
          type="number"
          :disabled="modalInfoTransaction.modalType === 'VIEW'"
          id="input-desc-account"
          v-model="modalInfoTransaction.debit"
          required
        />

        <div class="mt-2">Credit Amount</div>
        <input
          class="modal-body__input"
          type="number"
          :disabled="modalInfoTransaction.modalType === 'VIEW'"
          id="input-desc-account"
          v-model="modalInfoTransaction.credit"
          required
        />

        <div class="mt-2">Description</div>
        <input
          class="modal-body__input"
          :disabled="modalInfoTransaction.modalType === 'VIEW'"
          id="input-desc-account"
          v-model="modalInfoTransaction.description"
          required
        />
      </div>
      <template v-slot:modal-footer="{ close }">
        <button
          class="btn btn-modal btn-sm"
          v-if="modalInfoTransaction.modalType === 'CREATE'"
          :disabled="
            modalInfoTransaction.title === '' ||
              modalInfoTransaction.id === null
          "
          @click.prevent="doAddTransactionFinance"
        >
          Tambahkan
        </button>
        <button
          class="btn btn-modal btn-sm"
          v-if="modalInfoTransaction.modalType === 'EDIT'"
          :disabled="
            modalInfoTransaction.title === '' ||
              modalInfoTransaction.id === null
          "
          @click.prevent="doEditTransactionFinance"
        >
          Edit
        </button>
        <button
          v-if="modalInfo.modalType === 'VIEW'"
          class="btn btn-outline-secondary btn-sm"
          @click.prevent="close()"
        >
          Tutup
        </button>
        <button
          v-else
          class="btn btn-outline-secondary btn-sm"
          @click.prevent="close()"
        >
          Batal
        </button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TableAccount from "../components/TableAccount";
import TableTransaction from "../components/TableTransaction";

const modal_state = {
  CREATE: "CREATE",
  VIEW: "VIEW",
  EDIT: "EDIT"
};

export default {
  name: "Finance",
  components: {
    TableAccount,
    TableTransaction
  },
  data() {
    return {
      isAccount: true,
      modalInfo: {
        modalType: modal_state.CREATE,
        name: "",
        description: "",
        type: ""
      },
      modalInfoTransaction: {
        modalType: modal_state.CREATE,
        title: "",
        date: "",
        name: "",
        id: null,
        description: "",
        type: "",
        debit: 0,
        credit: 0
      },
      size: 5,
      page: 1,
      totalSize: 0,
      selected: {},
      dataAccount: [],
      listAccount: [],
      dataTransaction: [],
      currentFilter: {
        name: "",
        description: "",
        type: "",
        field: "name",
        sortType: 1
      },
      currentFilterTransaction: {
        title: "",
        date: "",
        name: "",
        description: "",
        type: "",
        debit: 0,
        credit: 0,
        field: "title",
        sortType: 1
      }
    };
  },
  mounted() {
    let payload = {
      name: "",
      description: "",
      type: "",
      field: "name",
      sortType: 1,
      size: this.size,
      page: this.page - 1
    };
    this.getDataAccountFinance(payload)
      .then(response => {
        if (response.status === 200) {
          this.dataAccount = response.data.data;
          //because totalSize information is missing here, so we will call All data to check how many
          this.totalSize = 25;
          this.getAllDataAccountFinance(payload).then(resp => {
            this.totalSize = resp.data.count;
          });
        }
      })
      .catch(error => {
        if (error.status !== 401)
          alert(`Code ${error.status}; ${error.message}`);
      });
  },
  watch: {
    page(val, oldVal) {
      if (this.isAccount) {
        this.handleGetDataAccount(this.currentFilter);
      } else {
        this.handleGetDataTransaction(this.currentFilterTransaction);
      }
    },
    isAccount(val, oldVal) {
      if (val) {
        this.page = 1;
        this.currentFilter = {
          name: "",
          description: "",
          type: "",
          field: "name",
          sortType: 1
        };
        this.handleGetDataAccount(this.currentFilter);
        this.getAllDataAccountFinance(this.currentFilter).then(resp => {
          this.totalSize = resp.data.count;
        });
      } else {
        let payload = {
          field: "name",
          sortType: 1
        };
        this.getAllDataAccountFinance(payload)
          .then(response => {
            if (response.status === 200) {
              this.listAccount = response.data.data;
            }
          })
          .catch(error => {
            if (error.status !== 401)
              alert(`Code ${error.status}; ${error.message}`);
          });
        this.page = 1;
        this.currentFilterTransaction = {
          title: "",
          date: "",
          name: "",
          description: "",
          type: "",
          debit: 0,
          credit: 0,
          field: "title",
          sortType: 1
        };
        this.handleGetDataTransaction(this.currentFilterTransaction);
        //in order to know total size, I call all data but only to find out size
        this.getAllDataTransactionFinance(this.currentFilterTransaction).then(
          resp => {
            this.totalSize = resp.data.count;
          }
        );
      }
    }
  },
  methods: {
    ...mapActions("finance", [
      "addDataAccountFinance",
      "getDataAccountFinance",
      "deleteDataAccountFinance",
      "editDataAccountFinance",
      "getAllDataAccountFinance",
      "getDataTransactionFinance",
      "addDataTransactionFinance",
      "editDataTransactionFinance",
      "deleteDataTransactionFinance",
      "getAllDataTransactionFinance"
    ]),
    selectAccount() {
      this.isAccount = true;
    },
    selectTransaction() {
      this.isAccount = false;
    },
    openModalCreateAccount() {
      this.modalInfo.modalType = modal_state.CREATE;
      this.modalInfo.name = "";
      this.modalInfo.description = "";
      this.modalInfo.type = "";
      this.$bvModal.show("modal-account");
    },
    doAddAccountFinance() {
      let payload = {
        name: this.modalInfo.name,
        description: this.modalInfo.description,
        type: this.modalInfo.type
      };
      this.addDataAccountFinance(payload)
        .then(() => {
          this.handleGetDataAccount(this.currentFilter);
          alert("Data berhasil ditambahkan!");
          this.$bvModal.hide("modal-account");
        })
        .catch(error => {
          if (error.status !== 401) alert("Data gagal ditambahkan!");
        });
    },
    doEditAccountFinance() {
      let payload = {
        data: {
          name: this.modalInfo.name,
          description: this.modalInfo.description,
          type: this.modalInfo.type
        },
        id: this.selected.id
      };
      this.editDataAccountFinance(payload)
        .then(() => {
          this.handleGetDataAccount(this.currentFilter);
          alert("Data berhasil diubah!");
          this.$bvModal.hide("modal-account");
        })
        .catch(() => {
          alert("Data gagal diubah!");
        });
    },
    doDeleteAccountFinance() {
      let payload = {
        id: this.selected.id
      };
      this.deleteDataAccountFinance(payload)
        .then(() => {
          this.handleGetDataAccount(this.currentFilter);
          alert("Data berhasil dihapus!");
          this.$bvModal.hide("modal-account-delete");
        })
        .catch(error => {
          if (error.status !== 401) alert("Data gagal dihapus!");
        });
    },
    handleGetDataAccount(payload) {
      this.currentFilter = JSON.parse(JSON.stringify(payload));
      payload.size = this.size;
      payload.page = this.page - 1;
      this.getDataAccountFinance(payload)
        .then(response => {
          if (response.status === 200) this.dataAccount = response.data.data;
        })
        .catch(error => {
          if (error.status !== 401)
            alert(`Code ${error.status}; ${error.message}`);
        });
    },
    handleViewDataAccount(item) {
      this.modalInfo.modalType = modal_state.VIEW;
      this.modalInfo.name = item.name;
      this.modalInfo.description = item.description;
      this.modalInfo.type = item.type;
      this.$bvModal.show("modal-account");
    },
    handleEditDataAccount(item) {
      this.modalInfo.modalType = modal_state.EDIT;
      this.modalInfo.name = item.name;
      this.modalInfo.description = item.description;
      this.modalInfo.type = item.type;
      this.selected = JSON.parse(JSON.stringify(item));
      this.$bvModal.show("modal-account");
    },
    handleDeleteDataAccount(item) {
      this.selected = item;
      this.$bvModal.show("modal-account-delete");
    },
    openModalCreateTransaction() {
      this.modalInfoTransaction.modalType = modal_state.CREATE;
      this.modalInfoTransaction.id = null;
      this.modalInfoTransaction.description = "";
      this.modalInfoTransaction.title = "";
      this.modalInfoTransaction.debit = 0;
      this.modalInfoTransaction.credit = 0;
      this.$bvModal.show("modal-transaction");
    },
    doAddTransactionFinance() {
      let payload = {
        title: this.modalInfoTransaction.title,
        description: this.modalInfoTransaction.description,
        debit_amount: Number(this.modalInfoTransaction.debit),
        credit_amount: Number(this.modalInfoTransaction.credit),
        finance_account_id: this.modalInfoTransaction.id
      };
      this.addDataTransactionFinance(payload)
        .then(() => {
          this.handleGetDataTransaction(this.currentFilterTransaction);
          alert("Data berhasil ditambahkan!");
          this.$bvModal.hide("modal-transaction");
        })
        .catch(error => {
          if (error.status !== 401) alert("Data gagal ditambahkan!");
        });
    },
    doEditTransactionFinance() {
      let payload = {
        data: {
          title: this.modalInfoTransaction.title,
          description: this.modalInfoTransaction.description,
          debit_amount: Number(this.modalInfoTransaction.debit),
          credit_amount: Number(this.modalInfoTransaction.credit),
          finance_account_id: this.modalInfoTransaction.id
        },
        id: this.selected.id
      };
      this.editDataTransactionFinance(payload)
        .then(() => {
          this.handleGetDataTransaction(this.currentFilterTransaction);
          alert("Data berhasil diubah!");
          this.$bvModal.hide("modal-transaction");
        })
        .catch(error => {
          if (error.status !== 401) alert("Data gagal diubah!");
        });
    },
    doDeleteTransactionFinance() {
      let payload = {
        id: this.selected.id
      };
      this.deleteDataTransactionFinance(payload)
        .then(() => {
          this.handleGetDataTransaction(this.currentFilterTransaction);
          alert("Data berhasil dihapus!");
          this.$bvModal.hide("modal-transaction-delete");
        })
        .catch(error => {
          if (error.status !== 401) alert("Data gagal dihapus!");
        });
    },
    handleGetDataTransaction(payload) {
      this.currentFilterTransaction = JSON.parse(JSON.stringify(payload));
      payload.size = this.size;
      payload.page = this.page - 1;
      this.getDataTransactionFinance(payload)
        .then(response => {
          if (response.status === 200)
            this.dataTransaction = response.data.data;
        })
        .catch(error => {
          if (error.status !== 401)
            alert(`Code ${error.status}; ${error.message}`);
        });
    },
    handleViewDataTransaction(item) {
      this.modalInfoTransaction.modalType = modal_state.VIEW;
      this.modalInfoTransaction.name = item.finance_account_name;
      this.modalInfoTransaction.type = item.finance_account_type;
      this.modalInfoTransaction.description = item.description;
      this.modalInfoTransaction.title = item.title;
      this.modalInfoTransaction.debit = item.debit_amount;
      this.modalInfoTransaction.credit = item.credit_amount;
      this.$bvModal.show("modal-transaction");
    },
    handleEditDataTransaction(item) {
      this.modalInfoTransaction.modalType = modal_state.EDIT;
      this.modalInfoTransaction.name = item.finance_account_name;
      this.modalInfoTransaction.id = item.finance_account_id;
      this.modalInfoTransaction.type = item.finance_account_type;
      this.modalInfoTransaction.description = item.description;
      this.modalInfoTransaction.title = item.title;
      this.modalInfoTransaction.debit = item.debit_amount;
      this.modalInfoTransaction.credit = item.credit_amount;
      this.selected = JSON.parse(JSON.stringify(item));
      this.$bvModal.show("modal-transaction");
    },
    handleDeleteDataTransaction(item) {
      this.selected = item;
      this.$bvModal.show("modal-transaction-delete");
    }
  }
};
</script>

<style lang="scss" scoped>
.btn-create {
  margin-top: 20px;
  margin-right: 20px;
  float: right;
}

::v-deep .modal-header {
  margin-left: 20px;
  .title {
    font-size: 20px;
    .tag {
      margin-bottom: 5px;
      background: #f2f8fc;
      color: #8dbfe3;
      width: fit-content;
      font-size: 10px;
    }
  }
  border: 0px;
}

::v-deep .modal-footer {
  border: 0px;
  margin: auto;
  .btn {
    width: 100px;
    height: 40px;
    border-radius: 20px;
  }
}

::v-deep .modal-body {
  margin-left: 20px;
  &__input {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid rgba(147, 190, 220, 0.5);
    padding-bottom: 5px;
    width: 90%;
    background-color: transparent;
    color: #12405d;
    text-align: left;
    -webkit-appearance: none;
  }
}
</style>
