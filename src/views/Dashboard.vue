<template>
  <div>
    <div class="main__title">
      DASHBOARD
    </div>
    <div class="main__body">
      <div class="summary">
        Transaction Summary
        <div class="d-flex">
          <div
            class="box"
            @click="selectDaily()"
            :class="{ box__selected: isDaily }"
          >
            Daily
          </div>
          <div
            class="box"
            @click="selectMonthly()"
            :class="{ box__selected: !isDaily }"
          >
            Monthly
          </div>
        </div>
        <Chart
          v-if="isDaily && !isLoading"
          class="summary__chart"
          :chart-data="dataChartDaily"
          :options="dataOptions"
        />
        <Chart
          v-if="!isDaily && !isLoading"
          class="summary__chart"
          :chart-data="dataChartMonthly"
          :options="dataOptions"
        />
      </div>
      <div class="account"></div>
    </div>
  </div>
</template>

<script>
import Chart from "../components/Chart";
import { mapActions } from "vuex";

export default {
  name: "Dashboard",
  components: {
    Chart
  },
  data() {
    return {
      isDaily: true,
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      isLoading: true,
      listTransaction: [],
      dataChartDaily: {
        labels: ["", "", "", ""],
        datasets: [
          {
            label: "Date",
            data: [0, 0, 0, 0]
          }
        ]
      },
      dataChartMonthly: {
        labels: ["", "", "", ""],
        datasets: [
          {
            label: "Month",
            data: [0, 0, 0, 0]
          }
        ]
      },
      dataOptions: {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
          callbacks: {
            // title: (tooltipItem, data) => data.labels[tooltipItem[0].index]
          }
        }
      }
    };
  },
  mounted() {
    let payload = {
      field: "title",
      sortType: 1
    };
    this.getAllDataTransactionFinance(payload).then(response => {
      if (response.status === 200) {
        this.listTransaction = response.data.data;
        this.doFiltering();
      }
    });
    // .catch(error => {
    //   if (error.status !== 401)
    //     alert(`Code ${error.status}; ${error.message}`);
    // });
  },
  methods: {
    ...mapActions("finance", ["getAllDataTransactionFinance"]),
    selectDaily() {
      this.isDaily = true;
    },
    selectMonthly() {
      this.isDaily = false;
    },
    doFiltering() {
      let dateNow = new Date();
      for (let index = 0; index < 4; index++) {
        let tempMonth = new Date();
        tempMonth.setMonth(tempMonth.getMonth() - index);
        this.dataChartMonthly.labels[index] = this.month[tempMonth.getMonth()];
        // if(dateNow.getMonth() - index > -1)
        // this.dataChartMonthly.labels[index] = this.month[dateNow.getMonth()-index];
        // else
        // this.dataChartMonthly.labels[index] = this.month[dateNow.getMonth()-index+12];
        let tempDate = new Date();
        tempDate.setDate(dateNow.getDate() - index);
        this.dataChartDaily.labels[index] =
          tempDate.getDate().toString() + " " + this.month[tempDate.getMonth()];
      }
      this.listTransaction.forEach(element => {
        let dateElement = new Date(element.created_at);
        if (dateElement.getFullYear() === dateNow.getFullYear()) {
          if (dateElement.getMonth() === dateNow.getMonth() - 3)
            this.dataChartMonthly.datasets[0].data[3] += element.debit_amount;
          else if (dateElement.getMonth() === dateNow.getMonth() - 2)
            this.dataChartMonthly.datasets[0].data[2] += element.debit_amount;
          else if (dateElement.getMonth() === dateNow.getMonth() - 1) {
            this.dataChartMonthly.datasets[0].data[1] += element.debit_amount;
            let tempDate = new Date();
            tempDate.setDate(dateNow.getDate() - 3);
            if (dateElement.getDate() === tempDate.getDate())
              this.dataChartDaily.datasets[0].data[3] += element.debit_amount;

            tempDate.setDate(dateNow.getDate() - 2);
            if (dateElement.getDate() === tempDate.getDate())
              this.dataChartDaily.datasets[0].data[2] += element.debit_amount;

            tempDate.setDate(dateNow.getDate() - 1);
            if (dateElement.getDate() === tempDate.getDate())
              this.dataChartDaily.datasets[0].data[1] += element.debit_amount;
          } else if (dateElement.getMonth() === dateNow.getMonth()) {
            this.dataChartMonthly.datasets[0].data[0] += element.debit_amount;

            if (dateElement.getDate() === dateNow.getDate() - 3)
              this.dataChartDaily.datasets[0].data[3] += element.debit_amount;
            else if (dateElement.getDate() === dateNow.getDate() - 2)
              this.dataChartDaily.datasets[0].data[2] += element.debit_amount;
            else if (dateElement.getDate() === dateNow.getDate() - 1)
              this.dataChartDaily.datasets[0].data[1] += element.debit_amount;
            else if (dateElement.getDate() === dateNow.getDate()) {
              this.dataChartDaily.datasets[0].data[0] += element.debit_amount;
            }
          }
        }
      });
      this.isLoading = false;
    }
  }
};
</script>

<style lang="scss" scoped>
// .dashboard {
.summary {
  text-align: left;
  .box {
    cursor: pointer;
    margin: 5px;
    border-radius: 10px;
    text-align: center;
    border: 1px solid blueviolet;
    padding: auto;
    line-height: 50px;
    height: 50px;
    width: 150px;
    &__selected {
      cursor: default;
      background-color: blueviolet;
      color: white;
    }
  }
  &__chart {
    width: 100%;
    height: 300px;
  }
}
// }
</style>
