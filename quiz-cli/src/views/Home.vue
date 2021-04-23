<template>
  <div class="home">
    <img class="home-img" alt="City Quiz" src="../assets/city-quiz.jpg">
    <ul>
      <h2>Top 3 Highest Scores</h2>
      <li>
        test 1
      </li>
      <li>
        test 2
      </li>
      <li>
        test 3
      </li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import Quiz from '@/components/Quiz.vue'

export default {
  name: 'Home',
  components: {
    Quiz
  }
}
</script>
