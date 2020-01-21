<template>
    <div class="register-area">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-header">Login</div>

                        <div class="card-body">
                            <form @submit.prevent="register">

                                <div class="form-group row">
                                    <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                    <div class="col-md-6">
                                        <input id="name" type="text" class="form-control" v-model="form.name" name="name" :class="{'is-invalid': form.errors.has('name')}" required autocomplete="name" autofocus>
                                        <has-error :form="form" field="name"></has-error>

                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                                    <div class="col-md-6">
                                        <input id="email" type="email" class="form-control" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" required autocomplete="email" autofocus>
                                        <has-error :form="form" field="email"></has-error>

                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                    <div class="col-md-6">
                                        <input id="password" type="password" class="form-control" name="password" v-model="form.password" required autocomplete="current-password">

                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                                    <div class="col-md-6">
                                        <input id="password-confirm" type="password" class="form-control" name="password_confirmation" v-model="form.password_confirmation" :class="{'is-invalid': form.errors.has('password_confirmation')}" required autocomplete="new-password">
                                        <has-error :form="form" field="password_confirmation"></has-error>

                                    </div>
                                </div>

                                <div class="form-group row mb-0">
                                    <div class="col-md-8 offset-md-4">
                                        <button type="submit" class="btn btn-primary">Register</button>

                                        <router-link class="btn btn-success" to="/login">Login</router-link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: new Form({
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                    remember: null,
                })
            }
        },
        mounted(){

        },
        computed:{

        },
        methods:{
            register(){
                this.form.post('/register').then((response) =>{
                    this.$router.push('/home');
                }).catch((error) =>{
                    console.log(error)
                })
            }
        }
        
    }
</script>

