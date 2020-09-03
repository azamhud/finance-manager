<template>
  <div class="user-profile">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19.425"
      height="23.385"
      viewBox="0 0 19.425 23.385"
      class="account-svg-black mr-2"
    >
      <g transform="translate(0.62 0.602)">
        <path
          class="a"
          d="M17.352,10.886a5.165,5.165,0,0,1-1.962.621c-2.1.117-3.673-.671-5.937.1S6.1,15.1,1.789,14.24A4.31,4.31,0,0,1,.38,13.7v-.721a4.729,4.729,0,0,1,.252-1.543A4.662,4.662,0,0,1,5.042,8.32h8.117a4.562,4.562,0,0,1,3.354,1.459A3.773,3.773,0,0,1,17.352,10.886Z"
          transform="translate(0 5.363)"
        />
        <path
          class="b"
          d="M10.929,16.42H.38V12.982a4.729,4.729,0,0,1,.252-1.543A4.679,4.679,0,0,1,5.059,8.32h8.1a4.562,4.562,0,0,1,3.354,1.459,3.824,3.824,0,0,1,.788,1.107,4.6,4.6,0,0,1,.5,2.1V16.42H15.591"
          transform="translate(0 5.363)"
        />
        <path
          class="c"
          d="M11.122,5.529a4.646,4.646,0,0,1-7.882,0,4.629,4.629,0,0,1,7.882,0Z"
          transform="translate(1.936 1.983)"
        />
        <path
          class="b"
          d="M12.151,5.029a4.5,4.5,0,0,1-.738,2.482,4.646,4.646,0,0,1-7.882,0A4.528,4.528,0,0,1,2.81,5.029a4.344,4.344,0,0,1,.453-1.945,4.662,4.662,0,0,1,8.553.252,4.528,4.528,0,0,1,.335,1.694Z"
          transform="translate(1.645)"
        />
      </g>
    </svg>
    <b-nav-item-dropdown
      :text="name"
      ref="dropdownUser"
      right
      class="dropdown-th"
    >
      <b-dropdown-text><span class="text-300">Username</span></b-dropdown-text>
      <b-dropdown-text>{{ username }}</b-dropdown-text>
      <b-dropdown-text><span class="text-300">Name</span></b-dropdown-text>
      <b-dropdown-text>{{ name }}</b-dropdown-text>
      <b-dropdown-text
        ><span class="text-300">Last Login</span></b-dropdown-text
      >
      <b-dropdown-text>{{ parseDate(lastLogin) }}</b-dropdown-text>
      <b-dropdown-divider />
      <div class="d-flex justify-content-center mt-2 mb-2">
        <button
          class="btn btn-outline-primary btn-xs w-25 ml-2"
          @click="doLogout()"
        >
          Logout
        </button>
      </div>
    </b-nav-item-dropdown>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "UserProfile",
  computed: {
    ...mapGetters("user", ["name", "username", "lastLogin"])
  },
  methods: {
    ...mapActions("user", ["logout"]),
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
    doLogout() {
      this.logout().then(() => {
        this.$router.push({ path: `/login` });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.user-profile {
  display: flex;
  position: absolute;
  top: 10px;
  right: 20px;
  //   width: 00px;
}

.dropdown-th {
  list-style-type: none;
  ::v-deep .b-dropdown-text {
    font-weight: normal;
  }
  ::v-deep a {
    padding: 0px;
    color: #2a2c2e;
  }
  ::v-deep ul {
    width: 210px;
  }
}
</style>
