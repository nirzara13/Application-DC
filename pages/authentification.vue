<template>
  <div class="auth-page">
    <div class="auth-box">
      <form class="auth-form" @submit.prevent="handleLogin">
        <div class="auth-input-group">
          <label for="email" class="auth-label">Adresse e-mail</label>
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="Entrez votre adresse e-mail"
            class="auth-input"
            required
          />
        </div>
        <div class="auth-input-group">
          <label for="password" class="auth-label">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            placeholder="Entrez votre mot de passe"
            class="auth-input"
            required
          />
          <a href="#" class="auth-forgot-password">Mot de passe oublié ?</a>
        </div>
        <button type="submit" class="auth-button">Se connecter</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "authentication",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleLogin() {
      // Implémentez ici la logique d'authentification
      console.log("Connexion avec :", this.email, this.password);
    },
  },
};
</script>

<style src="@/css/authentification.css" scoped></style>
