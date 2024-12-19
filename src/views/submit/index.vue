<template>
  <div>
    <h1>Submit Page</h1>
    <p>Enter your information here.</p>
    <form>
      <input type="text" v-model="phoneNumber" placeholder="Enter phone number" />
      <button type="submit" @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Submit',
  data() {
    return {
      phoneNumber: '',
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted with phone number:', this.phoneNumber);
      // Perform form submission logic here
      this.$router.push('/success');

    },
  },
};
</script>

<style scoped>
/* Add any styles here */
</style>
