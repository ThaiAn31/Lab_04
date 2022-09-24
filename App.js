import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
    <View style={{flexDirection:'column',flex:1,backgroundColor:'#dcdcdc'}}>
    <View style={{
      flexDirection: 'row',
      justifyContent:'space-between',flex:3/8,backgroundColor:'#ffffff'
    }}>
    <View style={{paddingTop:30,marginLeft:20,}}>
    <Image style={{width:120,height:150,}} source={require('./assets/book.png')} />
    </View>
    <View style={{marginLeft:20,}}>

    <Text style={{paddingTop:30,marginRight:30,}}>Nguyên hàm tích phân và ứng dụng</Text>

    <Text style={{}}>Cung cấp bởi Tiki Trading</Text>

    <Text style={{paddingTop:10,color:'#ff0000',fontSize:19,}}>141.000 đ</Text>
    <Text style={{paddingTop:10,marginLeft:2,fontSize:15,textDecorationLine:'line-through'}}>141.000 đ</Text>
    
 
   
    <View style={{flexDirection: 'row',justifyContent:'space-between',paddingTop:15,}}>
      
    <View style={{flexDirection:'row',justifyContent:'space-between',flex:1,}}>
        <TouchableOpacity style={{borderRadius:4,backgroundColor: "#DDDDDD",width:30,height:30,padding:8,}}><Image style={{width:15, height:15,}} source={require('./assets/minus.png')} /></TouchableOpacity>
        <Text  style={{padding:2,fontSize:17,}}>1</Text>
        <TouchableOpacity style={{borderRadius:4,backgroundColor: "#DDDDDD",width:30,height:30,padding:8,marginRight:30,}}><Image style={{width:15, height:15,}} source={require('./assets/plus.png')} /></TouchableOpacity>
    </View>
  
    <View style={{flex:1, }}>
    <Text style={{fontSize:15,marginLeft:30,padding:5,color:'#1e90ff'}}>Mua sau</Text>
    </View>
    </View>
   
    
  
    
    
    </View>
    
    
    </View>
    <View style={{flexDirection:'column', justifyContent:'space-between',height:100,paddingBottom:20,backgroundColor:'#ffffff'}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Text style={{fontSize:15,marginLeft:20,}}>Mã giảm giá đã lưu</Text>
    <Text style={{fontSize:15,marginRight:136,color:'#1e90ff',}}>Xem tại đây</Text>
    </View>
    <View style={{flexDirection:'row', justifyContent:'space-between',paddingBottom:10,paddingTop:15,}}>
    <View style={{borderStyle:'solid',borderWidth:1,width:220,alignContent:'center',marginLeft:20,height:50,}}>
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
    <Image style={{width:40,height:24,margin:12,marginLeft:25,}} source={require('./assets/yellow_block.png')} />
    <Text style={{fontSize:20,marginRight:25,paddingTop:10,}}>Mã giảm giá</Text>
    </View>
    </View>
    <TouchableOpacity style={{backgroundColor:'#4169e1',alignContent:'center',marginRight:30,width:100,borderRadius:4,}}><Text style={{paddingTop:13,marginLeft:19,color:'#ffffff',fontSize:17,}}>Áp dụng</Text></TouchableOpacity>
    
    </View>
    
    
   
    </View>
    
    
   
<View style={{flex:1/26,backgroundColor:'#dcdcdc'}}>

</View>
<View style={{flex:1/10,backgroundColor:'#ffffff'}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{paddingTop:15,marginLeft:20,}}>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
<Text style={{paddingTop:15,marginRight:20,color:'#1e90ff'}}>Nhập tại đây?</Text>
</View>

</View>
<View style={{flex:1/26,backgroundColor:'#dcdcdc'}}>

</View>
<View style={{flex:1/10,backgroundColor:'#ffffff'}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{paddingTop:12,marginLeft:20,fontSize:22,}}>Tạm tính</Text>
<Text style={{paddingTop:12,marginRight:20,color:'#ff0000',fontSize:22,}}>141.800 đ</Text>
</View>
</View>
<View style={{flex:1/3,backgroundColor:'#dcdcdc'}}>

</View>
<View style={{flex:1/4,backgroundColor:'#ffffff'}}>
<View style={{flexDirection:'row', justifyContent:'space-between'}}>
<Text style={{paddingTop:12,marginLeft:20,color:'#a9a9a9',fontSize:22,}}>Thành tiền</Text>
<Text style={{paddingTop:12,marginRight:20,color:'#ff0000',fontSize:22,}}>141.800 đ</Text>
</View>
<TouchableOpacity style={{backgroundColor:'#ff0000',alignContent:'center',margin:20,marginLeft:28,paddingTop:14,width:340,height:60,borderRadius:4,}}><Text style={{textAlign:'center',color:'#ffffff',fontSize:22,}}>Tiến hành đặt hàng</Text></TouchableOpacity>
</View>
    </View>
 
    

    
    
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:20,
   
   
  },
  // imgBook:{ 
  //   marginRight: 240,
  // },  
  
  // txtView1:{
  //   flex:1,
  //   flexDirection:'row',
  //   flexWrap:'wrap',
  //   width: 440,
  //   height: 70,
  // },
  // txtView2:{
  //   flex:4,
  //   flexDirection:'row',
  //   flexWrap:'wrap',
  //   width: 440,
  //   height: 70,
  // },
  // txtNguyenLy:{
  //   marginLeft:180,
  //   paddingTop: 40,
  // },
  // txtCungCap:{
  //   marginLeft:180,
  //   paddingBottom: 40,
  // },
  // txtPrice:{
  //   marginLeft:180,
  //   paddingTop:30,
  // }


});
