<template>
    <div class="hold-transition login-page">
        <spinner v-if="isLoading"></spinner>
        <div class="login-box" v-if="isLogin">
            <div class="login-logo">
                <a href=""><b>Login to access </b>Dashboard</a>
            </div>
            <!-- /.login-logo -->
            <div class="card">
                <div class="card-body login-card-body">
                    <p class="login-box-msg">Sign in to start your session</p>

                    <form @submit.prevent="login">
                        
                        <div class="input-group mb-3">
                            <input id="email" type="email" class="form-control" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" required autocomplete="email" autofocus>
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fa fa-envelope"></span>
                                </div>
                            </div>
                            <has-error :form="form" field="email"></has-error>
                        </div>
                        <div class="input-group mb-3">
                            <input id="password" type="password" class="form-control" name="password" v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" required autocomplete="current-password">
                            <div class="input-group-append">
                                <div class="input-group-text">
                                    <span class="fa fa-lock"></span>
                                </div>
                            </div>
                            <has-error :form="form" field="password"></has-error>
                        </div>
                        <div class="row">
                            <div class="col-sm-7 offset-sm-1">
                                <div class="icheck-primary">
                                    <input class="form-check-input" type="checkbox" name="remember" v-model="form.remember" id="remember">
                                    <label for="remember">
                                        Remember Me
                                    </label>
                                </div>
                            </div>
                            <!-- /.col -->
                            <div class="col-sm-4">
                                <button type="submit" class="btn btn-primary btn-block">Sign In</button>
                            </div>
                            <!-- /.col -->
                        </div>
                    </form>
                    <p class="mb-1">
                        <a href="">I forgot my password</a>
                    </p>
                </div>
                <!-- /.login-card-body -->
            </div>
        </div>
        <!-- /.login-box -->
        <link rel="stylesheet" href="">
        
    </div>
</template>

<script>
    export default {
        data(){
            return {
                form: new Form({
                    email: null,
                    password: null,
                    remember: null,
                }),
                isLoading: false,
                isLogin: true,
            }
        },
        mounted(){
            
        },
        computed:{

        },
        methods:{
            login(){
                this.isLoading = true;
                this.isLogin = false;
                this.form.post('/login').then((response) =>{
                    //this.$store.dispatch('authorized');
                    this.$store.commit('login_success', response);
                    this.$router.push('home');
                }).catch((error) =>{
                    this.$store.commit('login_failed', error)
                    this.isLoading = false;
                    this.isLogin = true;
                })
            }
        }
        
    }
</script>

