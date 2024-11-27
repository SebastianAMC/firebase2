<template lang="">
    <div style="display:flex; flex-direction: column; width:30%; margin:auto">
        <h2>Registro</h2>
        <input v-model="email" type="email" placeholder="Correo electrónico">
        <br/>
        <input v-model="password" type="password" placeholder="Contraseña">
        <br/>
        <div style="width:50%; margin:auto">
            <button @click="register">Registrarse</button>
        </div>
    </div>
</template>

<script>
import { createUserWithEmailAndPassword, auth } from '@/auth';

export default {
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods:{
        async register(){
            try{
                const userCredential = await createUserWithEmailAndPassword(auth, this.email, this.password);
                const user = userCredential.user;
                console.log('Usuario registrado: ', user)
                alert("Usuario creado correctamnte")
                this.$router.push('/')
            } catch(e){
                console.log('Error: ', e.message)
                alert('información no válida, intente nuevamente')
            }
        }
    }
}
</script>
<style lang="">
    
</style>