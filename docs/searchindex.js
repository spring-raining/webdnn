Search.setIndex({docnames:["api_reference/descriptor-runner/index","api_reference/graph_transpiler/axis","api_reference/graph_transpiler/backend/index","api_reference/graph_transpiler/constant_variable","api_reference/graph_transpiler/environment_variable","api_reference/graph_transpiler/frontend/chainer","api_reference/graph_transpiler/frontend/converter","api_reference/graph_transpiler/frontend/index","api_reference/graph_transpiler/frontend/keras","api_reference/graph_transpiler/graph","api_reference/graph_transpiler/index","api_reference/graph_transpiler/operator","api_reference/graph_transpiler/operators","api_reference/graph_transpiler/optimize_rule","api_reference/graph_transpiler/order","api_reference/graph_transpiler/placeholder","api_reference/graph_transpiler/variable","contributing/index","index","tips/build_js","tips/enable_webgpu_ios","tips/enable_webgpu_ios_ja","tips/es5","tips/index","tips/lstm","tips/safari_webcam","tutorial/caffe","tutorial/chainer","tutorial/custom_operator/index","tutorial/custom_operator/section0","tutorial/custom_operator/section1","tutorial/custom_operator/section2","tutorial/custom_operator/section3","tutorial/index","tutorial/introduction","tutorial/keras","tutorial/setup","tutorial/setup_windows"],envversion:51,filenames:["api_reference/descriptor-runner/index.md","api_reference/graph_transpiler/axis.rst","api_reference/graph_transpiler/backend/index.rst","api_reference/graph_transpiler/constant_variable.rst","api_reference/graph_transpiler/environment_variable.rst","api_reference/graph_transpiler/frontend/chainer.rst","api_reference/graph_transpiler/frontend/converter.rst","api_reference/graph_transpiler/frontend/index.rst","api_reference/graph_transpiler/frontend/keras.rst","api_reference/graph_transpiler/graph.rst","api_reference/graph_transpiler/index.rst","api_reference/graph_transpiler/operator.rst","api_reference/graph_transpiler/operators.rst","api_reference/graph_transpiler/optimize_rule.rst","api_reference/graph_transpiler/order.rst","api_reference/graph_transpiler/placeholder.rst","api_reference/graph_transpiler/variable.rst","contributing/index.rst","index.rst","tips/build_js.md","tips/enable_webgpu_ios.md","tips/enable_webgpu_ios_ja.md","tips/es5.md","tips/index.md","tips/lstm.md","tips/safari_webcam.md","tutorial/caffe.md","tutorial/chainer.rst","tutorial/custom_operator/index.rst","tutorial/custom_operator/section0.rst","tutorial/custom_operator/section1.rst","tutorial/custom_operator/section2.rst","tutorial/custom_operator/section3.rst","tutorial/index.rst","tutorial/introduction.rst","tutorial/keras.rst","tutorial/setup.md","tutorial/setup_windows.md"],objects:{"":{DEBUG:[4,5,1,"-"],OPTIMIZE:[4,5,1,"-"]},"webdnn.ConstantVariable":{change_order:[3,2,1,""],input_to:[3,0,1,""],name:[3,0,1,""],ndim:[3,0,1,""],order:[3,0,1,""],output_from:[3,0,1,""],replace:[3,2,1,""],shape:[3,0,1,""],shape_dict:[3,0,1,""],size:[3,0,1,""],stride:[3,0,1,""],stride_dict:[3,0,1,""]},"webdnn.Operator":{append_input:[11,2,1,""],append_output:[11,2,1,""],inputs:[11,0,1,""],outputs:[11,0,1,""],remove_all:[11,2,1,""],remove_input:[11,2,1,""],remove_output:[11,2,1,""],replace:[11,2,1,""],replace_input:[11,2,1,""],replace_output:[11,2,1,""]},"webdnn.OptimizeRule":{flags:[13,2,1,""],optimize:[13,2,1,""],register:[13,2,1,""]},"webdnn.Order":{check_same_axes:[14,2,1,""],get_all_axes:[14,2,1,""],get_common_axes:[14,2,1,""]},"webdnn.Placeholder":{check_resolved:[15,3,1,""],force_int:[15,3,1,""],generate_js_function:[15,2,1,""],get_depend_placeholders:[15,2,1,""],is_resolved:[15,0,1,""],to_int:[15,3,1,""],value:[15,0,1,""]},"webdnn.Variable":{change_order:[16,2,1,""],input_to:[16,0,1,""],name:[16,0,1,""],ndim:[16,0,1,""],order:[16,0,1,""],output_from:[16,0,1,""],replace:[16,2,1,""],shape:[16,0,1,""],shape_dict:[16,0,1,""],size:[16,0,1,""],stride:[16,0,1,""],stride_dict:[16,0,1,""]},"webdnn.backend":{generate_descriptor:[2,2,1,""]},"webdnn.backend.interface.graph_descriptor":{IGraphExecutionData:[2,1,1,""]},"webdnn.backend.interface.graph_descriptor.IGraphExecutionData":{save:[2,2,1,""]},"webdnn.frontend.chainer":{ChainerConverter:[5,1,1,""]},"webdnn.frontend.chainer.ChainerConverter":{convert:[5,2,1,""],convert_from_inout_vars:[5,2,1,""]},"webdnn.frontend.converter":{Converter:[6,1,1,""]},"webdnn.frontend.converter.Converter":{convert:[6,2,1,""],get_variable:[6,2,1,""],has_variable:[6,2,1,""],register_handler:[6,4,1,""],serialize_operator_type:[6,2,1,""],set_variable:[6,2,1,""]},"webdnn.frontend.keras":{KerasConverter:[8,1,1,""]},"webdnn.frontend.keras.KerasConverter":{convert:[8,2,1,""],convert_to_constant_variable:[8,2,1,""],get_input_tensor:[8,2,1,""],get_output_tensor:[8,2,1,""]},"webdnn.graph.operators.abs":{Abs:[12,1,1,""]},"webdnn.graph.operators.average_pooling_2d":{AveragePooling2D:[12,1,1,""]},"webdnn.graph.operators.axiswise_bias":{AxiswiseBias:[12,1,1,""]},"webdnn.graph.operators.axiswise_scale":{AxiswiseScale:[12,1,1,""]},"webdnn.graph.operators.clipped_relu":{ClippedRelu:[12,1,1,""]},"webdnn.graph.operators.concat":{Concat:[12,1,1,""]},"webdnn.graph.operators.convolution2d":{Convolution2D:[12,1,1,""]},"webdnn.graph.operators.deconvolution2d":{Deconvolution2D:[12,1,1,""]},"webdnn.graph.operators.elementwise":{Elementwise:[12,1,1,""]},"webdnn.graph.operators.elementwise_add":{ElementwiseAdd:[12,1,1,""]},"webdnn.graph.operators.elementwise_div":{ElementwiseDiv:[12,1,1,""]},"webdnn.graph.operators.elementwise_mul":{ElementwiseMul:[12,1,1,""]},"webdnn.graph.operators.elementwise_pow":{ElementwisePow:[12,1,1,""]},"webdnn.graph.operators.elu":{Elu:[12,1,1,""]},"webdnn.graph.operators.embedding":{Embedding:[12,1,1,""]},"webdnn.graph.operators.hard_sigmoid":{HardSigmoid:[12,1,1,""]},"webdnn.graph.operators.leaky_relu":{LeakyRelu:[12,1,1,""]},"webdnn.graph.operators.linear":{Linear:[12,1,1,""]},"webdnn.graph.operators.local_response_normalization":{LocalResponseNormalization:[12,1,1,""]},"webdnn.graph.operators.max_pooling_2d":{MaxPooling2D:[12,1,1,""]},"webdnn.graph.operators.pooling_2d":{Pooling2D:[12,1,1,""]},"webdnn.graph.operators.reinterpret_axis":{ReinterpretAxis:[12,1,1,""]},"webdnn.graph.operators.relu":{Relu:[12,1,1,""]},"webdnn.graph.operators.reshape":{Reshape:[12,1,1,""]},"webdnn.graph.operators.scalar_add":{ScalarAdd:[12,1,1,""]},"webdnn.graph.operators.scalar_affine":{ScalarAffine:[12,1,1,""]},"webdnn.graph.operators.scalar_mul":{ScalarMul:[12,1,1,""]},"webdnn.graph.operators.scalar_pow":{ScalarPow:[12,1,1,""]},"webdnn.graph.operators.sigmoid":{Sigmoid:[12,1,1,""]},"webdnn.graph.operators.softmax":{Softmax:[12,1,1,""]},"webdnn.graph.operators.softplus":{Softplus:[12,1,1,""]},"webdnn.graph.operators.softsign":{Softsign:[12,1,1,""]},"webdnn.graph.operators.tanh":{Tanh:[12,1,1,""]},"webdnn.graph.operators.threshold_relu":{ThresholdRelu:[12,1,1,""]},"webdnn.graph.operators.zero_padding_1d":{ZeroPadding1D:[12,1,1,""]},"webdnn.graph.operators.zero_padding_2d":{ZeroPadding2D:[12,1,1,""]},Placeholder:{label:[15,0,1,""]},webdnn:{Axis:[1,1,1,""],ConstantVariable:[3,1,1,""],Graph:[9,1,1,""],Operator:[11,1,1,""],OptimizeRule:[13,1,1,""],Order:[14,1,1,""],Placeholder:[15,1,1,""],Variable:[16,1,1,""]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","classmethod","Python class method"],"5":["std","envvar","environment variable"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:classmethod","5":"std:envvar"},terms:{"11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5":[18,23],"11\u306b\u642d\u8f09\u306eweb\u30d6\u30e9\u30a6\u30b6safari\u306b\u306f":21,"3_64bit":37,"64bit":[36,37],"67e894c6cd8f":36,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f":21,"\u3053\u308c\u306b\u3088\u308a":21,"\u30d6\u30e9\u30a6\u30b6\u306e\u52d5\u4f5c\u3092\u4e0d\u5b89\u5b9a\u306b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059":21,"\u30db\u30fc\u30e0\u30dc\u30bf\u30f3\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af":21,"\u4e00\u65e6\u7d42\u4e86\u3059\u308b":21,"\u521d\u671f\u8a2d\u5b9a\u3067\u306fwebgpu\u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u305f\u3081":21,"\u5b9f\u9a13\u7684\u6a5f\u80fd\u3068\u3057\u3066webgpu\u304c\u642d\u8f09\u3055\u308c\u3066\u3044\u307e\u3059":21,"\u65e5\u672c\u8a9e\u7248":20,"\u6ce8\u610f":21,"\u8a2d\u5b9a\u3092\u958b\u304d":21,"\u8a73\u7d30\u3092\u30bf\u30c3\u30d7":21,"boolean":13,"case":[12,22,24,25,28,29,30,32],"char":24,"class":[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,30,31,32],"default":[4,6,8,20,22],"enum":1,"export":36,"features\u3092\u30bf\u30c3\u30d7":21,"final":[23,30],"float":12,"function":[2,11,24,29,30,31,32,35],"import":[27,30,31,32,34,35],"int":[8,12,15,37],"long":24,"new":[3,11,13,14,15,16,18,24,30],"public":17,"return":[2,5,6,8,13,14,15,26,30,31,32,37],"safari\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u5834\u5408":21,"safari\u3067webgpu\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059":21,"safari\u306e\u753b\u9762\u3092\u4e0a\u306b\u30b9\u30ef\u30a4\u30d7":21,"safari\u3092\u30bf\u30c3\u30d7":21,"static":15,"super":31,"switch":24,"true":[3,6,11,15,16,24,35],"try":[36,37],"var":11,"webdnn\u306e\u52d5\u4f5c\u306f\u5927\u5e45\u306b\u9ad8\u901f\u5316\u3055\u308c\u307e\u3059":21,"webgpu\u306b\u3088\u308a":21,"webgpu\u306f\u5b9f\u9a13\u7684\u6a5f\u80fd\u3067\u3042\u308a":21,"webgpu\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u4ee5\u5916\u306f\u7121\u52b9\u5316\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059":21,"webgpu\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059":21,"webgpu\u3092io":[18,23],"webgpu\u3092on\u306b\u3059\u308b":21,But:24,For:[0,12,14,17,20,29,31,32,36],Its:12,Not:3,One:[24,34],That:[26,30,35],The:[0,15,17,24,30,31,32,34,37],Then:[17,24,26,35,37],There:[17,25,29,34],These:34,Use:[5,6,8,12,18,23,33],Using:[18,23],__init__:31,about:[26,29,30,31,32],abov:[17,24],abs:[12,16],absolut:12,acceler:[20,34],accept:[12,17,24],access:[17,25],accompilsh:37,accord:24,accuraci:24,achiev:34,activ:[24,29,36],actual:12,add:[12,15,24,35,37],add_weight:32,added:[17,37],adding:37,addit:34,adob:25,advanc:[20,23],affect:24,affin:12,aggress:34,agre:17,ajax:22,alias:10,align:14,all:[3,4,8,11,12,15,16,17,26,29,30,31,35],allow:[17,25],almost:[12,31],along:[12,32,36],alpha:12,alreadi:[8,14,15,20,29,30,32,34],also:[3,8,10,12,13,15,17,22,24,27,29,30,32,35,36,37],ambigu:12,anaconda3:37,anaconda:37,analysi:[13,24],ani:[29,34],anoth:[12,34],anyth:12,api:[18,34],api_doc:12,api_refer:35,append:[11,15],append_input:11,append_output:11,appl:36,appli:[4,13,34],applic:[24,26,30,31,32,34,35,37],appropri:17,architectur:[28,30],archiv:37,arg:6,argmax:[26,35],argument:[6,30,31],arrai:[3,12,35],articl:24,arxiv:12,ask:17,asm:36,assert:12,assign:8,assum:12,async:[30,31,32],attent:34,attract:34,attribut:[3,12,30],automat:[11,22,24,26,30,35,36],avail:[27,35,37],averag:[12,29],average_pooling_2d:12,average_pooling_2d_test:17,averagepooling2d:17,await:[15,22,24,26,30,31,32,35],axes:[3,12,14,16,32],axi:[3,10,12,14,16],axiswise_bia:12,axiswise_scal:12,babel:22,backend:[4,8,10,17,26,27,30,31,32,35,36,37],backendnam:[26,35],background:23,base:[7,12,15,17,24,26,30,32,35,37],basic:[10,15,16],bat:37,batch:[8,14,15,32],batch_siz:[8,30,31,32,35],becaus:[12,30,32],befor:37,behavior:[4,6,19],being:12,berkeleyvis:12,best:[17,26,35],beta:12,between:[8,30],bia:[12,29],biaslay:32,bin:[4,35],binari:[16,34],binaryen:36,bind:30,bitbucket:36,bool:[3,6,11,13,15,16],both:[14,15,29],branch:17,bring:34,browser:[0,17,20,22,25,27,34,36,37],bug:17,build:[5,17,18,23,30,32],bus:35,button:[17,20,25,30,31,32],bz2:36,caff:[12,34,36,37],caffemodel:[18,33],caffenet:26,calcul:[12,29,30,31],call:[12,13,24,29,30,31,32],callabl:12,camera:[18,23],can:[4,6,12,14,15,17,22,24,26,28,29,30,31,32,34,35,36,37],cannot:[15,34],cap:12,capac:34,caption:24,care:31,caus:15,cdn:22,cdnj:22,certif:17,certifi:17,chain:29,chainer:[5,7,18,24,29,33,34,36,37],chainerconvert:[7,27],chang:[3,6,12,13,16,17,25],change_ord:[3,16],channel:[12,14],channel_last:8,charact:24,check:[3,6,8,11,14,15,16,17,26,35],check_resolv:15,check_same_ax:14,child:6,choic:29,classif:[24,27,35],classifi:[26,35],classmethod:6,cli:22,click:[17,20,25],clip:12,clipped_relu:12,clone:[36,37],close:20,cloud:34,cloudflar:22,cnn:24,code:[15,17,19,23,26,29,30,31,32,34,35],coeffici:12,colus:22,com:[22,24,25,36,37],comma:30,command:[17,19,36,37],comment:17,common:24,compar:[15,24],compat:22,compil:[15,22,26,35,36,37],complet:[26,30,31,32,34,35],complex:24,compliant:22,compon:[2,10,30],comput:[5,6,9,11,12,13,26,27,29,30,32,34],computation:34,concaten:[12,24],concret:[15,24,37],confer:[27,35],configur:[25,37],conflict:37,congratul:[26,35],connect:[3,11,12,16,29],consid:[14,30,32],consider:20,consist:[17,29,34],consol:[17,26,30,31,32,35],constant:[3,8],constantvari:[8,10],construct:[5,27,29],constructor:30,contain:[2,6,7,10,12,13,16,17,31],content:[17,37],continuum:37,contribut:18,contributor:17,control:4,conv2d_handl:29,convers:[3,16,24,26,29],convert:[5,7,8,10,12,15,17,23,24,27,34,36,37],convert_caff:26,convert_from_inout_var:5,convert_kera:[4,35],convert_to_constant_vari:[8,32],convolut:[12,29],copi:17,copyright:17,correspond:[6,12,17,29,30],cost:34,cout:37,cover:17,cplus_include_path:[36,37],cpp:37,cpu:34,creat:[2,3,16,17,31,37],cross:12,current:[24,36,37],custom:[6,8,12,18,29,32,33],custom_oper:[30,31,32],cvpr:[27,35],d4700:17,data:[3,8,12,14,16,26,27,29,32,34,35],data_format:8,datum:2,debug:[4,17],decompress:37,deconvolut:12,decor:[6,30],decreas:[3,16],deep:[17,27,34,35],def:[30,31,32],defin:[6,12,14,27,28],definit:24,dens:[12,24,37],dense_handl:29,depend:[15,37],deprec:12,describ:[12,17,20,22,24,25,26,29,34],descriptor:[2,10,14,15,24,26,29,30,31,32,34,35,37],descriptor_runn:[19,22,35],descriptorgener:[2,29],descriptorrunn:[0,26,35],design:[32,34],destin:2,detail:12,determin:[15,32],develop:[17,34,36,37],devic:34,dialog:25,dictionari:[3,12,16,31],differ:[17,25,31,32,34],difficulti:34,dilat:12,dilation_r:12,dimens:[1,3,12,16,32],directli:17,directori:[2,17,19,22,34,35,37],dirnam:2,disabl:20,disconnect:[3,11,16],displai:34,dist:[19,22,30,31,32],distribut:17,div:15,divid:12,dnn:[0,6,7,9,10,11,17,24,29,34],dnndescriptorrunn:35,doc:[27,37],documant:17,document:[12,17,18,22,24,25,35,37],doe:[12,22,24,25,36,37],doesn:29,don:[30,36],done:[12,17],dot:12,doubl:20,drive:17,dropout:24,dsth:35,dstw:35,dtype:[5,27],dummi:[5,27],each:[1,3,6,10,12,16,29,30,31,32,34,37],easi:[25,30],easili:[28,34],ecmascript5:[18,23],edit:34,either:[14,15],element:[3,8,12,16,24],elementwis:[28,29,32],elementwise_add:12,elementwise_div:12,elementwise_mul:12,elementwise_pow:12,elementwiseab:16,elementwiseadd:[16,32],elementwisesum:29,emb:12,embed:[15,24],emcc:37,empti:[5,27],emsdk:[36,37],emsdk_env:36,enabl:[18,23,25,36,37],encount:34,end:34,endl:37,english:21,env:22,environ:[10,17,34],equat:15,error:[12,15],es2015:22,es5:[19,23],es6:35,essenc:35,etc:[15,29,30],even:8,everi:17,everyon:17,exampl:[14,17,23,26,29,34,35],except:12,exe:37,exec_info:[27,35],execut:[17,24,27,29,34,35,37],exist:37,expens:34,experiment:[20,21],exponenti:[12,32],extend:[28,30],extract:[24,30],fallback:[13,27,30,31,32,35],fallbackdescriptorgener:[30,31,32],fals:[13,15],familiar:34,fastest:36,fc6:[5,27],featur:[12,17,20,22,24,31,32,34],feed:24,feel:17,fetch:22,few:34,field:34,figur:29,file:[2,17,22,26,34,35,37],fill:37,find:34,finish:35,first:[8,15,17,24,25,26,30,31,32,35],fix:17,flag:[13,22],flag_semicolon:15,flash:23,float32:[5,27],float32arrai:26,floor:15,focus:34,follow:[4,12,14,15,16,17,19,22,24,29,30,31,32,34,37],foo:22,force_int:15,forget:30,fork:17,format:[6,24,27,34],forward:5,found:[17,29,30,35],foundat:17,framework:[6,7,10,17,18,29,33,36,37],francisco:17,free:17,from:[3,5,16,17,19,24,25,27,29,30,31,32,34,35,36,37],frontend:[5,6,8,10,27,30,31,32,35],full:[34,37],fulli:12,futur:5,game:34,gate:22,gener:[2,6,10,11,12,15,17,19,23,26,27,32,34,36,37],generat:2,generate_descriptor:[27,35],generate_js_funct:15,get:[6,26,30,32,35,36,37],get_all_ax:14,get_common_ax:14,get_depend_placehold:15,get_input_tensor:[8,30,31,32],get_output_tensor:[8,30,31,32],get_vari:[6,30,31,32],getimagearrai:35,getinputview:[24,26,30,31,32,35],getoutputview:[24,26,30,31,32,35],git:[36,37],github:[18,24,36,37],give:[17,36],given:[13,24,29],good:25,gpu:[17,34],graph:[2,3,4,5,6,8,10,11,12,13,14,15,16,17,27,28,30,31,32,34],graph_descriptor:2,graphic:34,guid:[18,33],handl:8,handler:[6,8,12],har:34,hard:12,hard_sigmoid:12,hardwar:34,has:[12,20,31,32],has_vari:6,have:[12,14,17,22,24,25,26,29,30,32,34,35,36,37],height:32,hello:37,help:[12,34,36],helpx:25,her:17,here:[30,35,37],herein:17,higher:24,highest:24,highli:34,his:17,hit:17,hold:17,holder:8,home:20,hot:24,how:[18,20,22,25,26,28,30,31,32,34],howev:[25,28,32,34],html:[12,17,22,25,26,27,30,31,32,34,35,37],http:[12,22,24,25,27,35,36,37],hyper:[30,31],iOS:[18,21,23],ie11:22,ieee:[27,35],illustr:[24,35],imag:[24,26,27,32,34,35],imagenet:[26,35],implement:[6,8,10,12,17,24,29,30,31,32,34],improv:17,in_ord:12,includ:[14,17,30,31,32,36,37],include_top:35,incom:36,increas:[3,16],incur:34,indefinit:17,index:[12,30,31,32,37],indic:17,inflat:22,inform:[8,17,27],inherit:12,initi:[26,32,35],inplac:30,input:[3,5,8,9,11,12,16,23,26,29,30,31,32,34,35],input_ord:8,input_sequ:24,input_shap:[24,32,35],input_to:[3,16],insert:[12,22],instal:[19,22,25],instanc:[6,12,14,31],instead:[12,17,22],instruct:25,integ:15,interfac:[2,35],intermedi:29,intern:24,interpret:[12,17,34],introduct:[18,33],involv:17,iostream:37,ipynb:26,is_resolv:15,issu:18,iter:23,its:[12,17,24,34],itself:[15,24,29,30],javascript:[15,18,22,24,30,31,32,34,35],jpg:35,juj:36,jump:36,jupyt:26,just:[12,13],jxf:36,k_op:8,kei:[6,30,31,34],kera:[7,8,18,24,27,29,30,31,32,33,34],keras_i:[30,31,32],keras_lay:[30,31,32],keras_x:[30,31,32],kerasconvert:[7,30,31,32,35],kerasmodel:8,kernel:[12,29,30,31],kind:[17,24],knowledg:17,kripken:37,ksize:12,kwarg:[2,6,31],label:[15,26,35],labelid:[26,35],lambda:31,languag:[24,34],laptop:34,last:[24,30],latest:[27,37],lauguag:24,layer:[5,8,11,12,17,24,27,28,29,30,31],leaki:12,leaky_relu:12,learn:[17,26,27,30,31,32,35],least:[17,27,35],left:[12,29],len:24,length:[12,15,32],let:[24,26,30,31,32,35],letterman:17,level:22,lib:22,librari:[0,6,22,25,34,36,37],licens:18,like:[12,15,17,22,29,30,31,32],limit:8,line:32,link:[5,27],linux:[17,18,33,37],list:[5,8,9,12,13,14,15,30],load:[0,15,22,26,27,30,31,32,35,37],load_model:8,loadimagedata:26,local:12,local_response_norm:12,log:[4,26,30,31,32,35],logic:30,look:[26,35],lot:34,lrn:12,lstm:[18,23],lucki:25,luckili:[30,32],mac:[17,18,25,33],maco:36,mai:[12,17,20,36],main:[30,31,32,37],maintain:17,major:[14,34],make:[17,20,25],mandatori:17,mani:[17,28,29],manual:24,map:8,master:[17,36,37],match:12,math:[26,31,35],max:12,max_featur:24,max_pooling_2d:12,maxlen:24,mean:[12,14],mention:24,merg:12,metal:31,method:[5,6,8],mic:25,microphon:25,mil:[17,36,37],milhidaka:24,min:22,minor:14,minut:17,misc:10,mit:17,mnist:37,mod:15,mode:12,model:[5,7,8,9,10,18,23,26,29,30,31,32,33,34,36,37],modern:[25,34,35,36],modif:[17,24],modifi:[3,17,19],modul:[2,7,10,12,29,34,35],more:[12,13,17,23],most:[0,24,25,36],move:37,mul:15,multipl:[12,13,24],multipli:12,must:[3,12,16],my_keras_model:4,my_model:15,name:[1,2,3,6,8,11,12,16,17,29,30,31,32,37],nativ:34,natual:24,natur:[24,34],ndim:[3,16],need:[0,12,17,22,25,27,30,32,34,35,36,37],network:34,neural:34,new_vari:[3,16],newer:22,next:[24,26,29,30,31,34,35],next_char:24,nhwc:12,node:[29,30],none:[8,11,15,30,31],nonetyp:12,normal:[12,32],nose:17,nosetest:17,notebook:26,now:[20,24,35],npm:[19,22],ntc:12,nthwc:12,num_sampl:32,number:[3,16,29,32,34],numpi:[12,27,32],obj:12,object:[6,22,32],off:17,offici:25,offlin:[26,34,37],older:22,onc:[20,26,27,35],onclick:[30,31,32],one:[3,8,12,16,17,24],ones:32,onli:[0,3,8,12,13,15,17,24,25,26,29,30,32,34,35,36,37],onlin:34,op_new:11,open:[18,20,25],oper:[3,6,8,10,15,16,18,29,32,33],operand:15,operatorclass:[30,31],operators_test:17,optim:[4,12,13,29],optimizerul:10,option:[31,37],order:[3,8,10,11,12,16],orderc:32,ordercn:[12,16,32],orderhcnw:14,ordernc:[8,12,16,32],ordernchw:12,ordernhwc:[8,12,14],ordernt:12,orderntc:[8,12],ordertn:12,ordinari:12,org:[12,27,36,37],organ:17,origin:17,other:[6,7,11,14,17,29,30,31,32],otherwis:[4,12,15,17,29],our:[17,27],out:[4,22,34,35],out_ord:12,out_shap:12,out_vec:24,output:[2,3,4,5,8,9,11,12,16,17,23,26,27,29,30,31,32,34,35,37],output_from:[3,16],overrid:6,own:[19,23],packag:37,pad:12,page:[20,25,26,34,37],pair:[3,16],param:15,paramet:[2,3,5,6,8,9,11,12,13,14,15,16,28,29,32],part:17,pass:[8,30],path:37,pattern:[27,35],perform:[17,34,36],permiss:25,permit:17,person:17,phase:[29,30],php:37,pip:36,pipelin:34,pixel:12,place:8,placehold:[8,10,12],player:23,pleas:[8,12,17,27,31],plugin:22,polyfil:23,pool:12,pooling_2d:12,popular:[14,37],posit:12,possibl:[15,34],pow:30,power:[12,31],powf:31,powlay:31,powoper:31,practic:34,pre:[14,28,30,32],pre_trained_model:8,predict:[24,26,35],prediction_vector:24,prefer:25,preset:[22,29],pretrain:27,prev:[30,31,32],preview:[20,36],previou:[17,30,32],print:[4,15],probabl:24,problem:34,procedur:[12,17,24],process:34,product:[12,34],program:[34,37],programdata:37,prohibit:12,project:17,promis:22,prompt:37,propag:5,propos:17,provid:[8,17,31,34],pull:18,purpos:34,pwd:36,pyenv:36,python2:36,python3:[36,37],python:[12,17,18,34,35],question:17,rais:[12,15],randomli:24,rate:12,receiv:[31,32],recent:34,recognit:[27,34,35],recommend:17,record:17,rectifi:12,recurrent_dropout:24,recurs:17,redistribut:17,refer:[18,24,26,27,29,35,37],referenc:[29,32],regener:22,regist:[6,8,12,13,29,30],register_elementwise_kernel:[30,31],register_elementwise_kernel_fallback:[30,31],register_elementwise_kernel_webassembl:[30,31],register_elementwise_kernel_webgpu:[30,31],register_handl:[6,30,31,32],reinterpret_axi:12,relat:[2,10,29,30],releas:17,remov:[3,5,11,12,16],remove_al:11,remove_input:11,remove_output:11,ren:[27,35],replac:[3,11,16,37],replace_input:11,replace_output:11,report:17,repositori:17,repres:[1,14,15,29,30,32],represent:29,request:18,requir:[17,24,29,34,36,37],residu:[27,35],resnet50:[27,35],resnet50lay:[5,27],resnet:[5,27],resolv:15,respect:29,respons:12,restrict:17,result:[17,30,31,32],return_sequ:24,revis:17,rgb:35,right:[12,17,29],rtype:13,rule:[4,13,17],run:[0,17,19,20,24,27,30,31,32,34,36],runner:[15,24,26,30,31,32,34,35],runtim:[15,30],safari:[18,20,23,36],same:[3,11,12,14,16,17,24,31,34],sampl:[24,30,31,32],sample_next_char:24,san:17,save:[2,27,30,31,32,35],scalar:[12,24],scalar_add:12,scalar_affin:12,scalar_mul:12,scalar_pow:12,scalaraffin:29,scale:12,school:35,school_bu:35,script:[22,25,30,31,32,35],sdk:[36,37],second:[30,32],section1:30,section2:31,section3:32,section:[12,26,29,30,31,32,36,37],secur:23,see:[6,8,12,26,27,36],seem:37,select:[24,26,35],self:[30,31,32],semant:[1,12,14,32],semicolon:15,send:18,sentenc:24,sentence_se:24,sentence_to_arrai:24,sentiment:24,sequenc:23,sequenti:24,seri:[12,15,32],serial:6,serialize_operator_typ:6,server:[26,35],set:[15,20,23,24,26,30,31,32,34,35],set_valu:32,set_vari:[6,30,31,32],setplaceholdervalu:15,setup:[0,18,33,34],sever:34,shape:[3,8,11,12,16,32,35],shape_dict:[3,12,16],sheepdog:26,shell:36,shetland:26,shift:12,should:[14,20,37],show:[26,35],side:24,sigmoid:24,sign:17,signatur:12,similar:[30,31,36],similarli:29,simpl:24,simplest:24,simpli:[14,17,30],simplifi:15,sinc:12,singl:13,site:[25,37],size:[3,8,12,14,15,16,29,32],skip:[36,37],slope:12,smartphon:34,softmax:[24,32],solut:34,some:[10,17,19,22,24],sometim:[25,28],sourc:[1,2,3,5,6,8,9,11,12,13,14,15,16,17,19,29,30,36,37],spatial:12,special:25,specifi:[2,3,8,12,15,16,17,31,32,35],speed:29,speedi:34,speedier:34,squar:31,square_converter_handl:[30,31,32],squarelay:[30,31],squareoper:30,src:[19,22,30,31,32],stack:24,standard:[22,34],start:[36,37],state:23,stateless:29,statement:22,std:37,step:[30,34],sterategi:34,still:37,store:[6,30,32],str:[2,6,11,12,15],stride:[3,12,16],stride_dict:[3,16],string:6,structur:[18,30,33],sub:[13,15,35],submit:17,suffix:17,suit:17,suitabl:34,sun:[27,35],suppli:[22,34],support:[8,12,13,15,16,18,23,24,25,29,34,36,37],suppos:12,swap:12,swipe:20,symbol:15,symbolicfloat32arrai:[26,35],syntax:22,system:[25,37],tab:25,tap:20,tar:36,target:[2,12,17,25],techniqu:24,technolog:36,tensor:[8,30,32],tensor_dot:12,tensordot:12,tensorflow:[8,12],term:17,test:[18,36,37],test_fallback:17,test_kernel:17,test_webassembl:17,test_webgl:17,test_webgpu:17,text_gener:24,tf_var:8,than:[13,17],thei:[12,15,34],them:[17,34,37],therefor:[17,27,29,30,32,34],thi:[2,3,5,6,8,11,12,13,15,16,17,18,20,22,24,25,26,27,28,29,30,31,32,34,35,36,37],third:31,three:29,threshold:12,threshold_relu:12,through:17,time:[12,13,15],tip:18,titl:37,to_int:15,toactual:[24,26,30,31,32,35],tokyo:[17,36,37],too:32,top:[12,37],tradit:35,train:[29,34,35],train_mnist_chain:37,trainabl:32,transform:[12,13,22,29],transpil:[4,10,17,28,30,34],travers:[17,29,30],tsc:22,tsconfig:22,tupl:[12,13,30],turn:20,tutori:[12,18,27,35],tuxfamili:37,two:[14,24,29,34],type:[5,6,8,12,13,15,26,29,30,31,32,35,36,37],typenam:30,typic:32,unari:16,under:17,understand:[12,17],undetermin:8,uniform:32,union:12,unit:12,unknown:15,unless:[17,20],unresolv:15,unstabl:20,until:13,updat:24,upon:17,usag:24,use:[14,19,20,22,24,25,28,30,34],used:[8,11,12,13,24,31,32,34,36,37],user:[0,12,18,34,36],uses:[17,22,34],using:[24,34,35],usual:34,util:[2,30],v_new:11,v_old:11,valid:8,valu:[6,8,12,13,15,24,31,32],valueerror:15,variabl:[1,3,5,6,8,9,10,11,12,26,27,29,30,32,35],variou:[10,32,34],vector:[24,26,35],verbatim:17,veri:[30,34],version:[5,12,17,34,35,37],via:35,video:34,view:26,vision:[5,27,35],visit:25,vocabulari:12,want:[6,8,12,17,19,20,22,25,28,36,37],warn:20,wasm:37,web:[0,17,18,20,23,27,34],webassembl:[17,27,30,31,32,34,35,36,37],webassemblydescriptorgener:[30,31,32],webcamj:25,webdnn:[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,20,23,24,26,27,28,30,31,32,33,35,36,37],webdnn_b:32,webdnn_i:[30,31,32],webdnn_oper:[30,31],webdnn_test:17,webdnn_x:[30,31,32],webgl:[27,34,35],webgpu:[2,4,17,18,23,27,30,31,32,34,35,37],webgpudescriptorgener:[30,31,32],webrtc:25,websit:25,weight:[12,28,31,34,35],welcom:17,well:[26,35,37],wget:36,when:[3,12,13,15,16,25,29,30,37],where:[12,37],whether:[3,6,11,13,15,16,17],which:[3,11,14,15,16,22,24,25,29,30,31,32,34,36,37],who:17,whole:[17,24],whose:[3,12,16,17],wide:24,width:32,window:[18,22,33,36],with_assert:[3,11,16],without:[28,29,31,34],withs:30,word:[12,24],work:[17,25,26,35,37],workaround:25,worker:37,world:37,wrap:[8,25],written:[30,31],www:[12,37],y_typed_arrai:[26,35],you:[4,6,8,12,14,17,19,20,22,24,25,26,28,29,30,31,32,34,35,36,37],your:[6,8,12,17,18,19,23,25,26,29,33,35],zero:[12,13],zero_padding_1d:12,zero_padding_2d:12,zhang:[27,35],zip:37},titles:["JavaScript API","Axis","backend","ConstantVariable","Environment Variables","ChainerConverter","Converter","frontend","KerasConverter","Graph","Python API","Operator","operators","OptimizeRule","Order","Placeholder","Variable","How to Contribute","MIL WebDNN","Building webdnn.js","Enabling WebGPU on iOS 11","WebGPU\u3092iOS 11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5","EcmaScript5 support","Tips","Using LSTM model","Using web camera in Safari","Use with caffemodel","Use with chainer model","Use your custom operator","0. Architecture of Graph Transpiler and How to Extend","1. Elementwise Operator without Parameters","2. Elementwise Operator with Parameters","3. Layer with Weights","Tutorial","Introduction to WebDNN","Use with keras model","Setup guide (for Mac / Linux)","Setup guide (for Windows)"],titleterms:{"11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5":21,"export":35,"final":24,"new":17,"webgpu\u3092io":21,Abs:12,Use:[22,26,27,28,35],Using:[24,25],advanc:24,api:[0,10],architectur:29,averagepooling2d:12,axi:[1,32],axiswisebia:12,axiswisescal:12,backend:2,background:25,bia:32,browser:[26,35],build:19,caffemodel:26,camera:25,chainer:27,chainerconvert:5,clippedrelu:12,code:[22,36,37],compil:17,comput:35,concat:12,constantvari:3,content:18,contribut:17,convert:[6,22,26,29,30,31,32,35],convolution2d:12,custom:[28,30,31],deconvolution2d:12,defin:[30,31,32],download:[36,37],ecmascript5:22,eigen:[36,37],elementwis:[12,30,31],elementwiseadd:12,elementwisediv:12,elementwisemul:12,elementwisepow:12,elu:12,embed:12,emscripten:[36,37],enabl:20,environ:[4,36,37],es5:22,exampl:[2,5,8,24,30,31,32,37],extend:29,flash:25,format:35,framework:34,free:34,frontend:7,gener:[24,29,30,31],generate_descriptor:2,graph:[9,29,35,37],graphdescriptor:26,guid:[36,37],handler:[29,30,31,32],hardsigmoid:12,how:[17,29],iOS:20,igraphexecutiondata:2,infer:34,input:24,instal:[34,36,37],interfac:34,introduct:34,issu:17,iter:24,javascript:0,kera:35,kerasconvert:8,layer:32,leakyrelu:12,licens:17,linear:12,linux:36,localresponsenorm:12,lstm:24,mac:36,maxpooling2d:12,mil:18,model:[24,27,35],more:24,non:34,note:36,open:17,oper:[11,12,28,30,31],optim:34,optimizerul:13,order:[14,32],our:35,output:24,overhead:34,overview:29,own:22,packag:36,paramet:[30,31],phase:34,placehold:15,player:25,polyfil:22,pooling2d:12,pow:31,pretrain:35,proper:37,pull:17,python:[10,36,37],reinterpretaxi:12,relu:12,request:17,reshap:12,run:[26,35,37],runtim:17,safari:25,scalaradd:12,scalaraffin:12,scalarmul:12,scalarpow:12,secur:25,send:17,sequenc:24,set:[25,37],setup:[36,37],sigmoid:12,softmax:12,softplu:12,softsign:12,special:34,squar:30,state:24,structur:34,support:22,tanh:12,test:[17,30,31,32],thresholdrelu:12,time:17,tip:23,transpil:[29,37],tutori:33,using:37,variabl:[4,16],verif:37,web:[25,26,35],webdnn:[18,19,22,29,34],webgpu:[20,36],weight:32,window:37,without:30,your:[22,28],zeropadding1d:12,zeropadding2d:12}})