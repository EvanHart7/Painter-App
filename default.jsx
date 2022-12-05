import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TextInput, ImageBackground, TouchableHighlight, Alert, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        startPageDisplay: 'block',
        paintPageDisplay: 'none',
        colorPageDisplay: 'none',
        makerPageDisplay: 'none',
        box0: 'white',
        box1: 'white',
        box2: 'white',
        box3: 'white',
        box4: 'white',
        box5: 'white',
        box10: 'white',
        box11: 'white',
        box12: 'white',
        box13: 'white',
        box14: 'white',
        box15: 'white',
        box20: 'white',
        box21: 'white',
        box22: 'white',
        box23: 'white',
        box24: 'white',
        box25: 'white',
        box30: 'white',
        box31: 'white',
        box32: 'white',
        box33: 'white',
        box34: 'white',
        box35: 'white',
        box40: 'white',
        box41: 'white',
        box42: 'white',
        box43: 'white',
        box44: 'white',
        box45: 'white',
        box40: 'white',
        box41: 'white',
        box42: 'white',
        box43: 'white',
        box44: 'white',
        box45: 'white',
        box50: 'white',
        box51: 'white',
        box52: 'white',
        box53: 'white',
        box54: 'white',
        box55: 'white',
        color: 'white',
        inputValue: '#000000',
        newColor: '#000000',
        placeHolder: '',
    }

    handleStartPagePress = () => this.setState(state => ({
        startPageDisplay: 'block',
        paintPageDisplay: 'none',
        colorPageDisplay: 'none',
        makerPageDisplay: 'none',
    }));

    // When Info Page button is pressed, hide Welcome page and show Info page
    handlePaintPagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        paintPageDisplay: 'block',
        colorPageDisplay: 'none',
        makerPageDisplay: 'none',
    }));

    // When Info Page button is pressed, hide Welcome page and show Info page
    handleColorPagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        paintPageDisplay: 'none',
        colorPageDisplay: 'block',
        makerPageDisplay: 'none',
    }));

    handleMakerPagePress = () => this.setState(state => ({
        startPageDisplay: 'none',
        paintPageDisplay: 'none',
        colorPageDisplay: 'none',
        makerPageDisplay: 'block',
    }));

    color = (shade) => {
            this.setState({
                color: shade,
            })
    }

    randomColor = () => {
        this.setState({
                inputValue: '#' + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)) + String(Math.floor(Math.random() * 10)),
            })
       }
       
    setColor = () => {
        this.setState({
                newColor: this.state.inputValue,
                color: this.state.inputValue,
            })
       }
    
    
    fill = () => {
        if (this.state.box0 == 'white')
        this.setState({
            box0: this.state.color,
        })
        if (this.state.box1 == 'white')
        this.setState({
            box1: this.state.color,
        })
        if (this.state.box2 == 'white')
        this.setState({
            box2: this.state.color,
        })
        if (this.state.box3 == 'white')
        this.setState({
            box3: this.state.color,
        })
        if (this.state.box4 == 'white')
        this.setState({
            box4: this.state.color,
        })
        if (this.state.box5 == 'white')
        this.setState({
            box5: this.state.color,
        })
        if (this.state.box10 == 'white')
        this.setState({
            box10: this.state.color,
        })
        if (this.state.box11 == 'white')
        this.setState({
            box11: this.state.color,
        })
        if (this.state.box12 == 'white')
        this.setState({
            box12: this.state.color,
        })
        if (this.state.box13 == 'white')
        this.setState({
            box13: this.state.color,
        })
        if (this.state.box14 == 'white')
        this.setState({
            box14: this.state.color,
        })
        if (this.state.box15 == 'white')
        this.setState({
            box15: this.state.color,
        })
        if (this.state.box20 == 'white')
        this.setState({
            box20: this.state.color,
        })
        if (this.state.box21 == 'white')
        this.setState({
            box21: this.state.color,
        })
        if (this.state.box22 == 'white')
        this.setState({
            box22: this.state.color,
        })
        if (this.state.box23 == 'white')
        this.setState({
            box23: this.state.color,
        })
        if (this.state.box24 == 'white')
        this.setState({
            box24: this.state.color,
        })
        if (this.state.box25 == 'white')
        this.setState({
            box25: this.state.color,
        })
        if (this.state.box30 == 'white')
        this.setState({
            box30: this.state.color,
        })
        if (this.state.box31 == 'white')
        this.setState({
            box31: this.state.color,
        })
        if (this.state.box32 == 'white')
        this.setState({
            box32: this.state.color,
        })
        if (this.state.box33 == 'white')
        this.setState({
            box33: this.state.color,
        })
        if (this.state.box34 == 'white')
        this.setState({
            box34: this.state.color,
        })
        if (this.state.box35 == 'white')
        this.setState({
            box35: this.state.color,
        })
        if (this.state.box40 == 'white')
        this.setState({
            box40: this.state.color,
        })
        if (this.state.box41 == 'white')
        this.setState({
            box41: this.state.color,
        })
        if (this.state.box42 == 'white')
        this.setState({
            box42: this.state.color,
        })
        if (this.state.box43 == 'white')
        this.setState({
            box43: this.state.color,
        })
        if (this.state.box44 == 'white')
        this.setState({
            box44: this.state.color,
        })
        if (this.state.box45 == 'white')
        this.setState({
            box45: this.state.color,
        })
        if (this.state.box50 == 'white')
        this.setState({
            box50: this.state.color,
        })
        if (this.state.box51 == 'white')
        this.setState({
            box51: this.state.color,
        })
        if (this.state.box52 == 'white')
        this.setState({
            box52: this.state.color,
        })
        if (this.state.box53 == 'white')
        this.setState({
            box53: this.state.color,
        })
        if (this.state.box54 == 'white')
        this.setState({
            box54: this.state.color,
        })
        if (this.state.box55 == 'white')
        this.setState({
            box55: this.state.color,
        })
    }


    clear = () => {
        this.setState({
            box0: 'white',
        box1: 'white',
        box2: 'white',
        box3: 'white',
        box4: 'white',
        box5: 'white',
        box10: 'white',
        box11: 'white',
        box12: 'white',
        box13: 'white',
        box14: 'white',
        box15: 'white',
        box20: 'white',
        box21: 'white',
        box22: 'white',
        box23: 'white',
        box24: 'white',
        box25: 'white',
        box30: 'white',
        box31: 'white',
        box32: 'white',
        box33: 'white',
        box34: 'white',
        box35: 'white',
        box40: 'white',
        box41: 'white',
        box42: 'white',
        box43: 'white',
        box44: 'white',
        box45: 'white',
        box40: 'white',
        box41: 'white',
        box42: 'white',
        box43: 'white',
        box44: 'white',
        box45: 'white',
        box50: 'white',
        box51: 'white',
        box52: 'white',
        box53: 'white',
        box54: 'white',
        box55: 'white',
        })
    }


    colorChange = (box) => {
        if (box == 'box0') {
            this.setState({
                box0: this.state.color,
            })
        } else if (box == 'box1') {
            this.setState({
                box1: this.state.color,
            })
        } else if (box == 'box2') {
            this.setState({
                box2: this.state.color,
            })
        } else if (box == 'box3') {
            this.setState({
                box3: this.state.color,
            })
        } else if (box == 'box4') {
            this.setState({
                box4: this.state.color,
            })
        }
        else if (box == 'box5') {
            this.setState({
                box5: this.state.color,
            })
        }
        else if (box == 'box10') {
            this.setState({
                box10: this.state.color,
            })
        }
        else if (box == 'box11') {
            this.setState({
                box11: this.state.color,
            })
        } else if (box == 'box12') {
            this.setState({
                box12: this.state.color,
            })
        } else if (box == 'box13') {
            this.setState({
                box13: this.state.color,
            })
        } else if (box == 'box14') {
            this.setState({
                box14: this.state.color,
            })
        }
        else if (box == 'box15') {
            this.setState({
                box15: this.state.color,
            })
        }
        else if (box == 'box20') {
            this.setState({
                box20: this.state.color,
            })
        }
        else if (box == 'box21') {
            this.setState({
                box21: this.state.color,
            })
        } else if (box == 'box22') {
            this.setState({
                box22: this.state.color,
            })
        } else if (box == 'box23') {
            this.setState({
                box23: this.state.color,
            })
        } else if (box == 'box24') {
            this.setState({
                box24: this.state.color,
            })
        }
        else if (box == 'box25') {
            this.setState({
                box25: this.state.color,
            })
        }
        else if (box == 'box30') {
            this.setState({
                box30: this.state.color,
            })
        }
        else if (box == 'box31') {
            this.setState({
                box31: this.state.color,
            })
        } else if (box == 'box32') {
            this.setState({
                box32: this.state.color,
            })
        } else if (box == 'box33') {
            this.setState({
                box33: this.state.color,
            })
        } else if (box == 'box34') {
            this.setState({
                box34: this.state.color,
            })
        }
        else if (box == 'box35') {
            this.setState({
                box35: this.state.color,
            })
        }
        else if (box == 'box40') {
            this.setState({
                box40: this.state.color,
            })
        }
        else if (box == 'box41') {
            this.setState({
                box41: this.state.color,
            })
        } else if (box == 'box42') {
            this.setState({
                box42: this.state.color,
            })
        } else if (box == 'box43') {
            this.setState({
                box43: this.state.color,
            })
        } else if (box == 'box44') {
            this.setState({
                box44: this.state.color,
            })
        }
        else if (box == 'box45') {
            this.setState({
                box45: this.state.color,
            })
        }
        else if (box == 'box50') {
            this.setState({
                box50: this.state.color,
            })
        }
        else if (box == 'box51') {
            this.setState({
                box51: this.state.color,
            })
        } else if (box == 'box52') {
            this.setState({
                box52: this.state.color,
            })
        } else if (box == 'box53') {
            this.setState({
                box53: this.state.color,
            })
        } else if (box == 'box54') {
            this.setState({
                box54: this.state.color,
            })
        }
        else if (box == 'box55') {
            this.setState({
                box55: this.state.color,
            })
        }
    }




    _handleTextChange = inputValue => {
        this.setState({ inputValue });
        
    };




    render() {
        return (
            <View style={styles.container}>
                
                <View style={{ display: this.state.startPageDisplay }}>
                    <View style={styles.container3}>
                        <Text style={styles.title}>
                            Pixel Paint
                        </Text>
                    </View>
                    <View style={styles.container4}>
                        <View style={styles.container5}>
                            <Text style={styles.title2}>
                               Welcome to Pixel Paint! Click on the pixels to change their color. Switch to the Colors tab to change your color. Use the fill bucket, eraser, and clear screen buttons to speed up your coloring.
                            </Text>
                        </View>
                    </View>
                </View>
                
                <View style={{ display: this.state.makerPageDisplay }}>
                    <View style={styles.container3}>
                        <Text style={styles.title}>
                            Pixel Paint
                        </Text>
                    </View>
                    <View style={styles.container2}>
                        
                        <View style={styles.top1}>
                            <Text style={styles.hexText}>
                            Hex Maker
                            </Text>
                            <View style={styles.boxBox3}> 
                            <TextInput
                                value={this.state.inputValue}
                                onChangeText={this._handleTextChange}
                                style={styles.textInput}
                            ></TextInput>
                            </View>
                            <View style={styles.boxBox2}>
                    <TouchableHighlight style={styles.navButton}
                            onPress={this.randomColor}
                        >
                    <Text style={styles.navButtonText}>
                           Random
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.setColor}
                    >
                    <Text style={styles.navButtonText}>
                           Set
                        </Text>
                    </TouchableHighlight>
                        </View>
                        
                        <View style={{height: deviceHeight/8, width: 2*deviceWidth/5, borderWidth: 1, borderColor: 'black', backgroundColor: this.state.newColor, marginTop: deviceHeight/12,}}>
                        </View>

                        
                        </View>
        
                </View>
                </View>
                
                
                <View style={{ display: this.state.colorPageDisplay }}>
                    <View style={styles.container3}>
                        <Text style={styles.title}>
                            Pixel Paint
                        </Text>
                    </View>
                    <View style={styles.container2}>
                        
                        <View style={styles.top1}>
                            <View style={styles.boxBox1}> 
                        
                        <TouchableHighlight
                            onPress={() => {
                                this.color('black')
                                }}
                            >
                        <View style = {styles.colorBox1}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight 
                            onPress={() => {
                                this.color('purple')
                                }}
                            >
                        <View style = {styles.colorBox2}>
                        </View>
                        </TouchableHighlight>
                        </View>
                        
                        
                        <View style={styles.boxBox1}> 
                        <TouchableHighlight
                            onPress={() => {
                                this.color('red')
                                }}
                            >
                        <View style = {styles.colorBox3}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.color('orange')
                                }}
                            >
                        <View style = {styles.colorBox4}>
                        </View>
                        </TouchableHighlight>
                        </View>
                        
                        <View style={styles.boxBox1}> 
                        <TouchableHighlight
                            onPress={() => {
                                this.color('#FFE800')
                                }}
                            >
                        <View style = {styles.colorBox5}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.color('green')
                                }}
                            >
                        <View style = {styles.colorBox6}>
                        </View>
                        </TouchableHighlight>
                        </View>
                        
                        <View style={styles.boxBox1}> 
                        <TouchableHighlight
                            onPress={() => {
                                this.color('blue')
                                }}
                            >
                        <View style = {styles.colorBox7}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.color('#964B00')
                                }}
                            >
                        <View style = {styles.colorBox8}>
                        </View>
                        </TouchableHighlight>
                        </View>
                        </View>
        
                </View>
                </View>
                
                
                
                <View style={{ display: this.state.paintPageDisplay }}>
                <View style={styles.container3}>
                        <Text style={styles.title}>
                            Pixel Paint
                        </Text>
                    </View>
                
                <View style={styles.container2}>
                

                <View style={styles.top}>
                    <View style={styles.boxBox}>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box0')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box0,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box1')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box1,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box2')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box2,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box3')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box3,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box4')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box4,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box5')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box5,}}>
                        </View>
                        </TouchableHighlight>
                    </View>    
                        
                     
                    <View style={styles.boxBox}>  
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box10')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box10,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box11')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box11,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box12')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box12,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box13')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box13,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box14')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box14,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box15')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box15,}}>
                        </View>
                        </TouchableHighlight>
                    </View> 
                        
                        
                    <View style={styles.boxBox}> 
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box20')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box20,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box21')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box21,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box22')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box22,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box23')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box23,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box24')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box24,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box25')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box25,}}>
                        </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.boxBox}>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box30')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box30,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box31')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box31,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box32')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box32,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box33')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box33,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box34')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box34,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box35')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box35,}}>
                        </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.boxBox}>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box40')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box40,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box41')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box41,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box42')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box42,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box43')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box43,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box44')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box44,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box45')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box45,}}>
                        </View>
                        </TouchableHighlight>
                    </View>
                    
                    <View style={styles.boxBox}>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box50')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box50,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box51')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box51,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box52')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box52,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box53')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box53,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box54')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box54,}}>
                        </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => {
                                this.colorChange('box55')
                            }}
                        >
                        <View style={{height: deviceHeight/14, width: 3*deviceWidth/26, backgroundColor: 'white', borderWidth: 1, borderColor: 'lightgray', backgroundColor: this.state.box55,}}>
                        </View>
                        </TouchableHighlight>
                    </View>
                    
                    
                    
                   
                </View>
                <View style={styles.boxBox2}>
                <TouchableHighlight style={styles.navButton}
                    onPress={this.fill}
                    >
                        
                        <Image
                            source={{ uri: 'https://codehs.com/uploads/2119dc0fcec478a7f38e4f223b240e62' }}
                            style={{ height: deviceHeight/16, width: deviceHeight/16, }}
                        ></Image>
                    </TouchableHighlight>
                <TouchableHighlight style={styles.navButton}
                            onPress={() => {
                                this.color('white')
                                }}
                            >
                        
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/2b22e3b24ef16568b677a5043ad43414' }}
                                    style={{ height: deviceHeight/12, width: deviceHeight/12, }}
                                ></Image>
                    </TouchableHighlight>
                <TouchableHighlight style={styles.navButton}
                            onPress={this.clear}
                            >
                        
                                <Image
                                    source={{ uri: 'https://codehs.com/uploads/7319eb12709304b85ab46c4dddda1c78' }}
                                    style={{ height: deviceHeight/16, width: deviceHeight/16, }}
                                ></Image>
                    </TouchableHighlight>
                </View>
                </View>
                </View> 
                
                    
                    
                    <View style={styles.navbarContainer}>
               
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleStartPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Home
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handlePaintPagePress}
                    >
                        <Text style={styles.navButtonText}>
                            Paint
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleColorPagePress}
                    >
                        <Text style={styles.navButtonText}>
                           Colors
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight style={styles.navButton}
                    onPress={this.handleMakerPagePress}
                    >
                        <Text style={styles.navButtonText}>
                           Custom
                        </Text>
                    </TouchableHighlight>
                    
                </View>
                
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: '#034078',
        alignItems: 'center',
        textAlign: 'center',
    },
    container2: {
        height: 8.5*(deviceHeight/12),
        width: deviceWidth,
        backgroundColor: '#034078',
        alignItems: 'center',
        textAlign: 'center',
    },
    container4: {
        height: 8.5*(deviceHeight/12),
        width: deviceWidth,
        backgroundColor: '#034078',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    container5: {
        height: (deviceHeight/2),
        width: 3*(deviceWidth/4),
        backgroundColor: '#034078',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
    },
    container3: {
        height: 1.5*(deviceHeight/12),
        width: deviceWidth,
        backgroundColor: '#001F54',
        alignItems: 'center',
        textAlign: 'center',
        borderBottomWidth: 5,
        borderColor: '#FEFCFB',
    },
    top1: {
        height: 3*deviceHeight/5,
        width: 3*deviceWidth/4,// the top is 1 part the height the whole screen
        margin: deviceHeight/17,
        alignItems: 'center',
        backgroundColor: 'gray',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    top: {
        height: deviceHeight/2,
        width: 3*deviceWidth/4,// the top is 1 part the height the whole screen
        backgroundColor: 'gray',
        marginTop: deviceHeight/17,
        marginBottom: deviceHeight/26,
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        
    },
    title: {
        fontSize: deviceHeight/10,
        color: 'white',
        fontFamily: 'Oswald',
    },
    title2: {
        fontSize: deviceWidth/13,
        color: 'white',
        fontFamily: 'Oswald',
    },
    box: {
        height: deviceHeight/14, // the buttom is 2 parts the height of the whole screen
        width: 3*deviceWidth/26,
        backgroundColor: 'white', 
        borderWidth: 1,
        borderColor: 'lightgray',
    },
    boxBox: {
        height: deviceHeight/14, // the buttom is 2 parts the height of the whole screen
        width: 3*deviceWidth/4,
        flexDirection: 'row', 
        // margin: -deviceHeight/28,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxBox1: {
        height: deviceHeight/7, // the buttom is 2 parts the height of the whole screen
        width: 3*deviceWidth/4,
        flexDirection: 'row', 
        alignItems: 'center',
    },
    boxBox2: {
        height: deviceHeight/7, // the buttom is 2 parts the height of the whole screen
        width: 3*deviceWidth/4,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        margin: -deviceHeight/40,
    },
    boxBox3: {
        height: deviceHeight/7, // the buttom is 2 parts the height of the whole screen
        width: 3*deviceWidth/4,
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    vLine: {
        width: deviceWidth/30,
        height: deviceHeight/2, 
        backgroundColor: 'white',
    },
    hLine: {
        width: 3*deviceWidth/4,
        height: deviceWidth/30, 
        backgroundColor: 'white',
    },
    navbarContainer: {
        height: deviceHeight/6,
        width: deviceWidth,
        backgroundColor: '#001F54',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 5,
        borderColor: '#FEFCFB',
    },
    navButton: {
        height: deviceHeight/14,
        width: deviceWidth/5,
        backgroundColor: '#1282A2',
        borderColor: '0A1128',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    navButtonText: {
        fontSize: deviceHeight/45,
        textAlign: 'center',
        color: 'white',
    },
    colorBox1: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'black',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox2: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'purple',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox3: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'red',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox4: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'orange',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox5: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: '#FFE800',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox6: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'green',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox7: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: 'blue',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    colorBox8: {
        height: deviceHeight/10,
        width: deviceWidth/3,
        backgroundColor: '#964B00',
        margin: deviceWidth/48,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
    },
    hexText: {
        fontSize: deviceWidth/10,
        color: 'white',
    },
    textInput: {
        height: deviceHeight/14,
        width: deviceWidth/3,
        borderWidth: 1,
        color: 'black',
        backgroundColor: 'white',
        fontSize: deviceWidth/12,
        textAlign: 'center',
    },
});
