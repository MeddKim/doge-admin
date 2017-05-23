<style scoped>
	.panel{
		background-color: rgba(0,0,0,.2);
		background: #009688;
		border: none;
		border-radius: 5px;
		position: relative;
		margin: 15px 15px ;
		box-shadow: 0 5px 5px rgba(0,0,0,.25);
	}
	.panel .panel-heading{
		color:#000;
		height: 44px;
		font-size: 16px;
		padding:14px 22px;
		border-bottom: 1px solid rgba(0,0,0,.12) ;
		border-bottom-left-radius: 0px;
		border-bottom-right-radius: 0px; 
		box-shadow: 0 1px 0 0 rgba(255,255,255,.12);
	}
	.panel .panel-body{
		padding: 15px 22px;
		height: 100%;
		box-shadow: 0 1px 0 0 rgba(255,255,255,.12);
	}
	
	.collect-container{
		padding:15px;
	}
	.collect-container .collect-card{
		width: 100%;
		height: 120px;
	}
	.collect-container .collect-card-publish{
		background-color: #29B6F6
	}
	.collect-container .collect-card-comment{
		background-color: #7E57C2
	}
	.collect-container .collect-card-uploaded{
		background-color: #33B86C
	}
	.collect-container .collect-card-link{
		background-color: #6E8CD7
	}
	.collect-card i{
		height: 25px;
		width: 25px;
	}
/*	.panel .panel-footer{

	}*/
</style>
<template>
 	<el-row>

		
		<el-col :span="24">
			<el-col :span="6" class="collect-container">
				<el-card class="collect-card collect-card-publish">	
					<i class="el-icon-upload"></i>	
					<p>共发布文章15篇</p>			
				</el-card>
			</el-col>
			<el-col :span="6" class="collect-container">
				<el-card class="collect-card collect-card-comment">
					<i class="el-icon-upload"></i>	
					<p>共发布文章15篇</p>					
				</el-card>
			</el-col>
			<el-col :span="6" class="collect-container">
				<el-card class="collect-card collect-card-uploaded">
					<i class="el-icon-upload"></i>	
					<p>共发布文章15篇</p>					
				</el-card>
			</el-col>
			<el-col :span="6" class="collect-container">
				<el-card class="collect-card collect-card-link">
					<i class="el-icon-upload"></i>	
					<p>共发布文章15篇</p>					
				</el-card>
			</el-col>
		</el-col>
		<el-col :span="8">
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>最新文章</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>			
		</el-col>
		<el-col :span="8">
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>最新留言</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>			
		</el-col>
		<el-col :span="8">
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>系统日志</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>			
		</el-col>
<!--  		<el-col :span="12">
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>测试</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>测试</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>
 		</el-col>
 		<el-col :span="12">
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>测试</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>
 			<div class="panel">
 				<div class="panel panel-heading">
 					<h3>测试</h3>
 				</div>
 				<div class="panel panel-body">
 					asdfsadfad
 				</div>
 			</div>
 		</el-col> -->
 	</el-row>
</template>
