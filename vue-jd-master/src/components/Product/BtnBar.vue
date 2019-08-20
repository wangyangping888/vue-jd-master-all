<template>
   <div class="btn-bar flex">
		<div class="icon-btn">
			<i class="icon-dog"></i>
			<div>联系客服</div>
		</div>
		<div class="icon-btn">
      <i class="icon-shop"></i>
			<div>进店</div>
		</div>
		<div class="icon-btn">
			<i class="icon-cart"></i>
			<div>购物车</div>
		</div>
		<div class="flex-item btn btn-add" @click="$emit('add',true);">
			加入购物车
		</div>
		<div class="flex-item btn btn-buy" @click="$emit('buy',true);">
			立即购买
		</div>
	</div>
 
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.btn-bar {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10000;
  background-color: hsla(0, 0%, 100%, 0.95);
}
.btn-bar .icon-btn {
  text-align: center;
  width: 14%;
  color: #999;
  font-size: 0.2rem;
  line-height: 0.4rem;
}

.btn-bar .icon-btn i {
  display: block;
  width: 100%;
  height: 0.6rem;
  background-size: auto 0.4rem;
  background-repeat: no-repeat;
  background-position: center 0.15rem;
}
.btn-bar .icon-btn i.icon-dog {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAwUExURUdwTGZmZmZmZmZmZmZmZmdnZ2ZmZmhoaGZmZmxsbGZmZmlpaWdnZ2ZmZmZmZmZmZk19Qx8AAAAPdFJOUwD05pRtRbwrqwzXG1eDylNiP4YAAAGTSURBVCjPrVNNSwJRFL3mx6ijIWoJQYwuXLgaF64iMle2NFqHtYuCDInW1cLtmAqt+wX6EwxatMuKVi0ShLbiCINIeXpvPnTMrW915/DOfeece4doGcd3eJ4If39U7Zi7BP2sF2aYqwlsnFQegPGuhQl9jPK8uFQwuTDBHDZbRiW+ImqSMWpZJFGB0eAL7Vn7AH71l7FmF7IPrqCGQi5tQc6oGynOHgYQskAH2lnOl1N+dC2QlTWVd+44Zi8xUpB9edFyMm3ClqT2mPBcWsQ1raomj524XspdWtEMqztSuGdYLMXJMaKMXWeFlBD5NWraA5uQEiePSkWbpZcYNbvkRMs1mKZYHxREpElAhx4nptCGnKQgN99PkVBSt1l693vSsEp3Y95lyJJS2DwSQISJyv4w0Muv+w5OZTZNPfIjHrY8l2dxrM+5bE/eJcUMh7JtRiXVdHKFiIWWcUbTGWt546IUnTYS3/iGZKoUtLf3PcssziR5tLm1E57eb/DpH/5fR6GJ4wWQ6hJGi6vbuI0s4w/4A2i0n3aDtHpAAAAAAElFTkSuQmCC);
}
.btn-bar .icon-btn i.icon-shop {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAmBAMAAABE2sQuAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURUdwTGZmZmlpaWZmZmdnZ2ZmZmdnZ2pqamZmZmZmZmZmZmdnZ2ZmZsMDXTsAAAAMdFJOUwDiIfJNxIoRtGqfP2fZSMkAAAEbSURBVCjPzZKhT8NAFMY/yhhsQZAMDDlBArgJIAFMBUNPALqiAVuxBEWYQCArcJgK8GhAIOhKWbu8P4p7dwl7rw7HJ971frl7X/O+A9AxJJSfgNUnpYmDiYbfDoazEX4VmIKXFh1DaEjcdImeJFygO+ezJWHHOSWVZFgO2cl8KYgkZ581Da+t0wo9aNi1TuNipGFAU2QzNJTWiCZN+FEinDbhuEDo/miwPq/DAlHJHyafV0syioE2yVrbeZSntxFR+ebrTkRndoA82TrlWmUuEDugXRdMl7dxi09ccOP33sYj8No7vARuzvfv8TddxXLXPvJp7km46NIEfUq4Sv8BqpT6HppKPKYgddPHi360PvJtDQ/8jWfJNm2vHx2SsNH4ChcMAAAAAElFTkSuQmCC);
}
.btn-bar .icon-btn i.icon-cart {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoBAMAAAB+0KVeAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURUdwTGZmZmpqamZmZmdnZ2ZmZmZmZmZmZmZmZmZmZmZmZkpWnhIAAAAKdFJOUwDpHqZGaoS60pfVa5fYAAAA+UlEQVQoz5WSKRPCMBSEQ2i5FIeLgsGhAIlCoKrAMVXVVWgUAw6FRlHoAfsraZMUkjTDDE807TdNdt++kBDZkJjFgEsFhkC3AomDexUSllhg+LDASWSBLRh1zKFrwlcOqQm5BtONhmnx3OtGPW7xGmvQ559+qsEF3+hlGjzfLO5FQB2oiVLsREtLBbqYFksTawW2ERRLQ8te/uLioMCaOMzBTU1SyFJtIB6kM3Ug/lP2oPa5l/0tMnW4STn7j1G6KQUmWvBB2YQxIV7bLzstyd817s2l+GxQZksZIvE+AvoS1nOBqWhDXgWe1kreXBZ70S9o3W4VMi29AabPf4enbQFkAAAAAElFTkSuQmCC);
}

.btn-bar .btn {
  line-height: 1rem;
  text-align: center;
  background: #e4393c;
  color: #fff;
  font-size: 0.28rem;
}

.btn-bar .btn-add {
  background: #ff9600;
}
</style>
