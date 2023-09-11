<template>
    <div class="signin">
        <Clear class="clear-element" />
        <h2 class="signin__title">Авторизация</h2>
        <p class="signin__subtitle">
            Чтобы авторизоваться, войти в профиль,<br>
            введите логин и пароль
        </p>
        <div class="input-group">
            <input type="text" class="input-group__item email" placeholder="Ваш email">
            <input type="text" class="input-group__item password" placeholder="Пароль">
        </div>
        <MyButton title="Войти" class="signin-btn" />
        <div class="reovery">
            <div class="remember">
                <input type="checkbox" class="remember__checkbox">
                <p class="remember__text">Запомнить меня</p>
            </div>
            <a href="" class="reovery__password">Забыли пароль?</a>
        </div>
        <div class="entrance">
            <div class="line"></div>
            <p class="entrance__text">Войти через соцсети</p>
            <div class="line"></div>
        </div>
        <div class="button-group">
            <MyButton class="button-group__item" title="Вконтакте" />
            <MyButton class="button-group__item" title="Google" />
        </div>
        <div class="addition">
            <p class="addition__title">Нет вашего аккаунта?</p>
            <a href="" class="addition__href">Зарегистрируйтесь </a>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyButton from './ui/MyButton.vue';
export default defineComponent({
    data() {
        return {};
    },
    components: { MyButton }
})
</script>

<style lang="scss">
* {
    margin: 0;
}

.signin {
    position: relative;

    width: 420px;
    padding: 30px 40px 20px 40px;
    margin: 0 auto;
    border-radius: $radius;

    background: $color-white;
    box-shadow: 0px 5px 20px rgba(63, 66, 69, 0.05);

    .clear-element {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .signin__title {
        text-align: center;
    }

    .signin__subtitle {
        margin: 20px 0;

        text-align: center;
        color: $color-grey-dark;
    }

    .input-group {
        @extend %flex-al-cent;
        flex-direction: column;

        .input-group__item {
            width: 95%;
            height: 48px;

            margin-bottom: 20px;
            padding-left: 20px;

            border-radius: $radius;

            border: $border-grey;
            background: $color-white;
        }
    }

    .signin-btn {
        width: $max-percent;

        margin-bottom: 22px;

        background: $color-blue;
        color: $color-white;
    }

    .reovery {
       @extend %flex-cent-between;

        .remember {
            display: flex;

            .remember__checkbox {
                width: 22px;
                height: 22px;

                margin-right: 10px;
            }
        }

        .reovery__password {
            color: $color-grey-dark;
        }

    }

    .entrance {
        @extend %flex-cent-between;

        margin: 30px 0 20px 0;

        .line {
            width: 112px;
            height: 1px;

            background: $color-white;
        }

        .entrance__text {
            font-size: 14px;
            color: $color-grey-dark;
        }
    }

    .button-group {
        @extend %flex-cent-around;

        margin-bottom: 30px;

        .button-group__item {
            width: 170px;
            height: 48px;

            background: $color-white;
            border: $border-grey;
        }
    }

    .addition {
        @extend %flex-cent-cent;
        width: $max-percent;
        height: 60px;
        border-radius: 0px 0px 5px 5px;

        .addition__title {
            margin-right: 10px;
            
            color: #3A3F43;
        }

        .addition__href {
            font-weight: $weight-500;
            color: $color-blue;
            text-decoration: none;
        }
    }

}
</style>