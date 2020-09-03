<template>
  <table class="table">
    <thead>
      <tr class="table__tr">
        <th class="table__th">
          <b-nav-item-dropdown
            text="Title"
            ref="dropdownTitle"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('title', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('title', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />

            <div class="mr-4 ml-4 box-filter rounded">
              <div class="d-flex justify-content-center">
                <b-input-group class="w-100">
                  <b-input-group-prepend is-text>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="search-icon svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </b-input-group-prepend>
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="filter.title"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>

            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('title')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown>
        </th>
        <th class="table__th">
          Transaction Date
          <!-- <b-nav-item-dropdown
            text="Transaction Date"
            ref="dropdownDate"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('date', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('date', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />
            <div class="d-flex justify-content-center mt-2 mb-2">
              <b-input-group class="w-75">
                <b-input-group-prepend is-text>
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="search"
                    class="search-icon svg-inline--fa fa-search fa-w-16"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                    />
                  </svg>
                </b-input-group-prepend>
                <b-form-input
                  aria-label="Text input with checkbox"
                  v-model="filter.date"
                ></b-form-input>
              </b-input-group>
            </div>

            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xxs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('date')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown> -->
        </th>
        <th class="table__th">
          <b-nav-item-dropdown
            text="Finance Account Type"
            ref="dropdownType"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('finance_account_type', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('finance_account_type', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />

            <div class="mr-4 ml-4 box-filter rounded">
              <div class="d-flex justify-content-center">
                <b-input-group class="w-100">
                  <b-input-group-prepend is-text>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="search-icon svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </b-input-group-prepend>
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="filter.type"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('type')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown>
        </th>
        <th class="table__th">
          <b-nav-item-dropdown
            text="Finance Account Name"
            ref="dropdownName"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('finance_account_name', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('finance_account_name', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />

            <div class="mr-4 ml-4 box-filter rounded">
              <div class="d-flex justify-content-center">
                <b-input-group class="w-100">
                  <b-input-group-prepend is-text>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="search-icon svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </b-input-group-prepend>
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="filter.name"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>

            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('name')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown>
        </th>
        <th class="table__th">
          <b-nav-item-dropdown
            text="Description"
            ref="dropdownDesc"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('description', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('description', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />

            <div class="mr-4 ml-4 box-filter rounded">
              <div class="d-flex justify-content-center">
                <b-input-group class="w-100">
                  <b-input-group-prepend is-text>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="search-icon svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </b-input-group-prepend>
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="filter.description"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>

            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('description')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown>
        </th>
        <th class="table__th">
          <b-nav-item-dropdown
            text="Debit Amount"
            ref="dropdownDebit"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('debit_amount', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('debit_amount', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />

            <div class="mr-4 ml-4 box-filter rounded">
              <div class="d-flex justify-content-center">
                <b-input-group class="w-100">
                  <b-input-group-prepend is-text>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="search-icon svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </b-input-group-prepend>
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="filter.debit"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>

            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('debit')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown>
        </th>
        <th class="table__th">
          <b-nav-item-dropdown
            text="Credit Amount"
            ref="dropdownCredit"
            class="dropdown-th"
          >
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('credit_amount', 'ascen')"
              >
                Sort A to Z
              </button>
            </div>
            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-outline-primary btn-xs w-75"
                @click="doSort('credit_amount', 'descen')"
              >
                Sort Z to A
              </button>
            </div>
            <b-dropdown-divider />

            <div class="mr-4 ml-4 box-filter rounded">
              <div class="d-flex justify-content-center">
                <b-input-group class="w-100">
                  <b-input-group-prepend is-text>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="search"
                      class="search-icon svg-inline--fa fa-search fa-w-16"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                      />
                    </svg>
                  </b-input-group-prepend>
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="filter.credit"
                  ></b-form-input>
                </b-input-group>
              </div>
            </div>

            <div class="d-flex justify-content-center mt-2 mb-2">
              <button
                class="btn btn-primary btn-xs w-25 mr-2"
                @click="doFilter"
              >
                Search
              </button>
              <button
                class="btn btn-outline-primary btn-xs w-25 ml-2"
                @click="doResetFilter('credit')"
              >
                Reset
              </button>
            </div>
          </b-nav-item-dropdown>
        </th>
        <th class="table__th">Action</th>
      </tr>
    </thead>

    <tbody>
      <tr class="table__tr" v-for="(item, key) in dataTransaction" :key="key">
        <td class="table__td">{{ item.title }}</td>
        <td class="table__td">{{ parseDate(item.created_at) }}</td>
        <td class="table__td">{{ item.finance_account_type || "-" }}</td>
        <td class="table__td">{{ item.finance_account_name || "-" }}</td>
        <td class="table__td">{{ item.Description || "-" }}</td>
        <td class="table__td">{{ item.debit_amount }}</td>
        <td class="table__td">{{ item.credit_amount }}</td>
        <td class="table__td td_action">
          <button
            class="btn btn-primary btn-xs mr-2"
            @click.prevent="doView(item)"
          >
            View
          </button>
          <button
            class="btn btn-secondary btn-xs mr-2"
            @click.prevent="doEdit(item)"
          >
            Edit
          </button>
          <button
            class="btn btn-danger btn-xs mr-2"
            @click.prevent="doDelete(item)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "TableAccount",
  props: {
    dataTransaction: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      filter: {
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
  created() {},
  methods: {
    parseDate(date) {
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
      var inputDate = new Date(date);
      var hours = inputDate.getHours();
      var minutes = inputDate.getMinutes();
      var ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      let stringDate =
        inputDate
          .getDate()
          .toString()
          .padStart(2, "0") +
        " " +
        months[inputDate.getMonth()] +
        " " +
        inputDate.getFullYear().toString() +
        " " +
        strTime;

      return stringDate;
    },
    doSort(id, type) {
      this.filter.field = id;
      this.filter.sortType = type === "ascen" ? 1 : -1;
      this.$emit("get-data", this.filter);
      this.doHide;
    },
    doResetFilter(type) {
      if (type === "name") this.filter.name = "";
      if (type === "description") this.filter.description = "";
      if (type === "type") this.filter.type = "";
      this.filter.field = "title";
      this.filter.sortType = 1;
      this.$emit("get-data", this.filter);
      this.doHide();
    },
    doFilter() {
      this.$emit("get-data", this.filter);
      this.doHide();
    },
    doHide() {
      this.$refs.dropdownName.hide(true);
      this.$refs.dropdownDesc.hide(true);
      this.$refs.dropdownType.hide(true);
      this.$refs.dropdownDate.hide(true);
      this.$refs.dropdownTitle.hide(true);
      this.$refs.dropdownDebit.hide(true);
      this.$refs.dropdownCredit.hide(true);
    },
    doView(item) {
      this.$emit("view-data", item);
    },
    doEdit(item) {
      this.$emit("edit-data", item);
    },
    doDelete(item) {
      this.$emit("delete-data", item);
    }
  }
};
</script>

<style lang="scss" scoped>
.dropdown-th {
  list-style-type: none;
  ::v-deep a {
    padding: 0px;
    color: #2a2c2e;
  }
  ::v-deep ul {
    width: 210px;
  }
}

.search-icon {
  height: 1rem;
  width: 1rem;
  fill: #ffffff;
}

.table {
  border-top: none;
  thead {
    tr {
      th {
        border-top: none;
      }
    }
  }
}
</style>
