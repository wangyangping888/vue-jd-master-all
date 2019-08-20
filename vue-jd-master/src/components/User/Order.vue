<template>
  <div class="user-cell-list flex">
    <div class="flex-item">
      <img src="@/assets/icon/wallet.png" alt>
      <div>待付款</div>
    </div>
    <div class="flex-item">
      <img src="@/assets/icon/car.png" alt>
      <div>待收货</div>
    </div>

    <div class="flex-item">
      <img src="@/assets/icon/money.png" alt>
      <div>退换 / 售后</div>
    </div>

    <div class="flex-item">
      <img src="@/assets/icon/order.png" alt>
      <div>全部订单</div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
.user-cell-list {
  margin: 0.3rem 0;
  text-align: center;
  background-color: #fff;

  img {
    width: 0.4rem;
  }
  .flex-item {
    padding: 0.2rem 0 0 0;
    div {
      color: #666;
      font-size: 0.24rem;
      line-height: 0.84rem;
      position: relative;
    }
    span {
      line-height: 1em;
      font-size: 0.32rem;
      font-weight: 700;
      color: #333;
      position: relative;
    }
  }
}
</style>