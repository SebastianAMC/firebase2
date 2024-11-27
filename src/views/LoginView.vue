<template lang="">
    <div style="display:flex; flex-direction: column; width:30%; margin:auto">
        <h2>Inicio de Sesión</h2>
        <input v-model="email" type="email" placeholder="Correo electrónico" />
        <br/>
        <input v-model="password" type="password" placeholder="Contraseña" />
        <br/>
        <div style="width:50%; margin:auto">
            <button @click="signIn">Iniciar Sesión</button>
        </div>
    </div>
</template>

<script>
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

export default {
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async signIn() {
            try {
                const { email, password } = this;
                const auth = getAuth();
                const { user } = await signInWithEmailAndPassword(auth, email, password);
                console.log(user)
                this.$router.push('/')
            } catch (e) {
                console.log(e)
                alert('Credenciales no válidas')
                this.email = ""
                this.password = ""
                this.$router.push('/login')
            }

        }
    }
}
</script>
<style></style>