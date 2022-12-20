<template>
  <picker
    mode="date"
    :value="value"
    :start="startDate"
    :end="endDate"
    @change="bindDateChange"
  >
    <slot></slot>
  </picker>
</template>
<script>
import moment from "moment";
export default {
  name: 'DatePicker',
  props: {},
  data() {
    const currentDate = this.getDate({
      format: true,
    });
    return {
      value: currentDate,
    };
  },
  computed: {
    startDate() {
      return this.getDate('start');
    },
    endDate() {
      return this.getDate('end');
    },
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    getDate(type) {
      const date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      if (type === 'start') {
        year = year - 60;
      } else if (type === 'end') {
        year = year + 2;
      }
      month = month > 9 ? month : '0' + month;
      day = day > 9 ? day : '0' + day;
      return `${year}-${month}-${day}`;
    },
    bindDateChange({ detail }) {
      const [year, month, day] = detail.value.split('-');
      this.$emit('change', `${month}月${day}日, ${year}`, moment(`${detail.value} 00:00:00`).valueOf());
    },
  },
};
</script>
<style></style>
