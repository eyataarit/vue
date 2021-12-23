<template>
  <div>
    <h1>Happy to have you among us!</h1>
    <form action="">
      <div class="form-group">
        <label for="firstName" class="form-label">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder=" FirstName"
          class="form-control"
          describedby="emailHelp"
          required
        />
      </div>

      <div class="form-group">
        <label for="lastName" class="form-label">Last Name </label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder=" Last Name"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="direction" class="form-label"> Direction</label>
        <select class="form-control" aria-required="true">
          <option value="none">Choose one</option>
          <option value="DRE">DRE</option>
          <option value="DRS">DRS</option>
          <option value="DSI">DSI</option>
        </select>
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder=" Email"
          class="form-control"
          required
        />
      </div>

      <div class="form-group">
        <label for="password" class="form-label">Password </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder=" Password"
          class="form-control"
          required
        />
      </div>

      <div>
        <button type="submit" class="btn btn-primary">Sign Up</button>
      </div>

      <span>
        You already have an account ?
        <router-link :to="{ path: 'login' }">Sign in</router-link>
      </span>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUp",
};
</script>

<style scoped></style>

