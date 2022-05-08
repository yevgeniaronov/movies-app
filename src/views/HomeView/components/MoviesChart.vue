<template>
  <div>
    <Line :chart-data="chartData"></Line>
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale,
  // eslint-disable-next-line no-unused-vars
  Plugin,
} from "chart.js";
import { getLatestMovies } from "../logic";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  CategoryScale
);
export default {
  props: {
    data: {
      type: Object,
      defualt: () => {},
    },
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Line,
  },
  setup() {
    const { data } = getLatestMovies(90);
    // TODO use latest movie data for chart
    console.log(data);
    const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Data One",
          backgroundColor: "#f87979",
          data: [40, 39, 10, 40, 39, 80, 40],
        },
      ],
    };
    return { chartData };
  },
};
</script>

<style lang="scss" scoped></style>
