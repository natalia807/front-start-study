<template>
  <div class="home">
    <router-link to="/cart" class="cart-icon">
      <CartIcon />
    </router-link>
    <CategoryMenu />
    <ItemsList />
    <Cart class="cart-menu"/>
  </div>
</template>

<script>
import CategoryMenu from '@/components/CategoryMenu.vue';
import ItemsList from '@/components/ItemsList.vue';
import Cart from '@/components/Cart.vue';
import Mixin from '@/mixins/mixins';

import CartIcon from '@/assets/icons/cart.svg';

export default {
  name: 'Home',
  components: {
    CategoryMenu,
    ItemsList,
    Cart,
    CartIcon
  },
  mixins: [Mixin],
}
</script>

<style scoped lang="less">
.home {
  display: flex;


  @media @small-desktops {
    .cart-menu {
      display: none;
    }

    flex-direction: column;
    
    .cart-icon {
      width: 42px;
      height: 42px;
      background: @pink;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 20px 20px 20px auto;
      cursor: pointer;
    }
  }
}
</style>
