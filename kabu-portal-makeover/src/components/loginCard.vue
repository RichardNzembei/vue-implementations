<script setup>
</script>
<template>
  <div class="login-container">
    <div class="login-box">
      <img src="../assets/Kabarak_University_logo.jpeg" alt="" class="logo" />
      <h2>KABARAK UNIVERSITY</h2>
      <form action="">
        <div class="input-group">
          <label for="reg-number">Reg.Number</label>
          <input
            type="text"
            id="reg-number"
            name="reg-number"
            placeholder="Reg. Number"
            required
          />
        </div>
        <div class="input-group">
          <label for="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            required
          />
          <span class="show-password" @click="togglePassword">👁️</span>
        </div><br>
        <div class="remember-me">
           <input type="checkbox" id="remember-me" name="remember-me">
           <label for="remember-me">Remember me</label>
        </div><br>
        <button type="submit" class="login-btn">Log In</button><br><br>
        <a href="" class="forgor-password">Forgot Your Password?</a>
      </form>
      <footer>
        <p>2024 © Designed by DSL Systems</p>
      </footer>
    </div>
  </div>
</template>
<style scoped>
.login-container{
    justify-content: center;
    display: flex;
    height: 100%;
    align-items: center;
}

.login-box {
    background-color: #8b0000;
    padding: 30px ;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 350px;
}

/* Logo */
.logo {
    width: 100px;
    margin-bottom: 10px;
    border-radius: 10px;
}

/* Heading */
h2 {
    color: #ffffff;
    margin: 10px 0;
}

/* Input Groups */
.input-group {
    margin: 15px 10px;
    position: relative;
}

label {
    display: block;
    color: #ffffff;
    font-size: 14px;
    text-align: left;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: none;
    border-radius: 4px;
}

/* Show Password Icon */
.show-password {
    position: absolute;
    right: 4px;
    top: 32px;
    cursor: pointer;
    color: #a87070;
}

/* Remember Me */
.remember-me {
    display: flex;
    align-items: center;
    color: #ffffff;
    font-size: 14px;
    margin-top: 10px;
}

.remember-me input {
    margin-right: 5px;
}

/* Login Button */
.login-btn {
    background-color: #00bfff;
    color: #ffffff;
    padding: 10px;
    width: 100%;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-btn:hover {
    background-color: #0080ff;
}

/* Forgot Password Link */
.forgot-password {
    display: block;
    margin-top: 10px;
    color: #269e1b;
    font-size: 14px;
    text-decoration: none;
}

.forgot-password:hover {
    text-decoration: underline;
}

/* Footer */
footer {
    margin-top: 20px;
    color: #ffffff;
    font-size: 12px;
}
</style>