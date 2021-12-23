<template>
  <div>
    <h1>Happy to see you again!</h1>
    <form>
      <div  class="form-group" >
        <label for="email" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="email"
          aria-describedby="emailHelp"
          required
        />
      </div>

      <div  class="form-group" >
        <label for="password" class="form-label">Password</label>
        <input
          type="password"
          class="form-control"
          id="password"
          required
        />
      </div>

      <div  class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="check" />
        <label class="form-check-label" for="check">Remember Me</label>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
      <span>
        You don't have an account yet?
        <router-link :to="{ path: 'signup' }">Sign up</router-link>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: {
  },
};
</script>

<style>
</style>