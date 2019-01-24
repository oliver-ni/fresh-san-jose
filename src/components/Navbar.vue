<template>
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="container">
            <div class="navbar-brand">
                <router-link class="navbar-item has-text-weight-bold" to="/">Fresh</router-link>
            
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <router-link class="navbar-item" active-class="is-active" to="/shop">Shop</router-link>
                    <router-link class="navbar-item" active-class="is-active" to="/merchants">Merchants</router-link>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">Account</a>
                        <div class="navbar-dropdown">
                            <router-link class="navbar-item" active-class="is-active" to="/login">Login</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05);
    height: 4rem;
}
.navbar-item,
.navbar-link {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.3rem;
}
</style>
