<template>
	<div class="Detail">
		<div class="top">
			<div class="con">
				楼市动向 ＞ {{state.name}}
			</div>
		</div>
		<div class="content">
			<div class="content2">				
				<div class="con-left">
				<h2>{{state.name}}</h2>
				<!--图片-->
				<div class="con-img">
					<img src="../assets/xinwen.jpg" alt="" />
				</div>
				<div class="con-tit">
					  呵呵呵呵额呵呵呵呵呵呵呵呵呵呵呵呵呵呵
				</div>
				<div class="con-tit">
					   呵呵呵呵额呵呵呵呵呵呵呵呵呵呵呵呵呵呵
				</div>
				<div class="con-tit">
					    呵呵呵呵额呵呵呵呵呵呵呵呵呵呵呵呵呵呵
				</div>
				</div>
				<!--右侧-->
				<div class="con-right">
				<div class="main-right">

					<!--组件-->
					<Title></Title>
                    </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Title from '@/components/Title.vue' 
	export default {
        name:"Detail",
        components: {
			Title
		},
        data(){
            return {
                state:{}
            }
        },
        created(){
            this.$http.post("http://localhost:3000/detail2",{id:this.$route.params.id},{emulateJSON:true}).then(e=>this.state=e.body[0])
        }
    }
</script>

<style>
		* {
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	
	.top {
		width: 100%;
		height: 80px;
		background-color: #F4F4F4;
		line-height: 80px;
		font-size: 14px;
		color: #333333;
	}
	
	.con {
		width: 95%;
		margin: 0 auto;
	}
	
	.content {
		width: 100%;
		padding-bottom: 100px;
	}
	
	.content2 {
		width: 95%;
		margin: 0 auto;
		overflow: hidden;
	}
	.con-left{
		width: 65%;
		float: left;
	}
	h2{
		line-height: 100px;
	}
	.con-left img {
		width: 100%;
		float: left;
	}
	
	.con-img img {
		height: 345px;
	}
	.con-tit{
		width: 100%;
		float: left;
		margin: 20px;
		font-size: 12px;
	}
	.con-right{
		width: 25%;
		float: right;
		overflow: hidden;
	}
	.main-right {
		width: 100%;
		float: left;
		background-color: #F7F7F7;
		overflow: hidden;
		margin-top: 10px;
	}
	
	.main-right p {
		width: 90%;
		height: 50px;
		margin-left: 20px;
		font-weight: bold;
		font-size: 14px;
		line-height: 30px;
		text-indent: 10px;
	}
	
	.main-right p span {
		width: 15px;
		height: 15px;
		background-color: #000;
		float: left;
		margin-top: 8px;
	}
	
	.main-right p button {
		background-color: #fff;
		border: 1px solid #000;
		float: right;
		margin-right: 10px;
		margin-top: 2px;
		padding: 2px;
	}
	.tit {
		height: 80px;
		margin-left: 20px;
		font-size: 14px;
		line-height: 25px;
	}
	
</style>