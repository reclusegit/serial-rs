var searchIndex = {};
searchIndex['serial'] = {"items":[[3,"Error","serial","An error type for serial port operations.",null,null],[3,"PortSettings","","A device-indepenent implementation of serial port settings.",null,null],[12,"baud_rate","","Baud rate.",0,null],[12,"char_size","","Character size.",0,null],[12,"parity","","Parity checking mode.",0,null],[12,"stop_bits","","Number of stop bits.",0,null],[12,"flow_control","","Flow control mode.",0,null],[4,"ErrorKind","","Categories of errors that can occur when interacting with serial ports.",null,null],[13,"NoDevice","","The device is not available.",1,null],[13,"InvalidInput","","A parameter was incorrect.",1,null],[13,"Io","","An I/O error occured.",1,null],[4,"BaudRate","","Serial port baud rates.",null,null],[13,"Baud110","","110 baud.",2,null],[13,"Baud300","","300 baud.",2,null],[13,"Baud600","","600 baud.",2,null],[13,"Baud1200","","1200 baud.",2,null],[13,"Baud2400","","2400 baud.",2,null],[13,"Baud4800","","4800 baud.",2,null],[13,"Baud9600","","9600 baud.",2,null],[13,"Baud19200","","19,200 baud.",2,null],[13,"Baud38400","","38,400 baud.",2,null],[13,"Baud57600","","57,600 baud.",2,null],[13,"Baud115200","","115,200 baud.",2,null],[13,"BaudOther","","Non-standard baud rates.",2,null],[4,"CharSize","","Number of bits per character.",null,null],[13,"Bits5","","5 bits per character.",3,null],[13,"Bits6","","6 bits per character.",3,null],[13,"Bits7","","7 bits per character.",3,null],[13,"Bits8","","8 bits per character.",3,null],[4,"Parity","","Parity checking modes.",null,null],[13,"ParityNone","","No parity bit.",4,null],[13,"ParityOdd","","Parity bit sets odd number of 1 bits.",4,null],[13,"ParityEven","","Parity bit sets even number of 1 bits.",4,null],[4,"StopBits","","Number of stop bits.",null,null],[13,"Stop1","","One stop bit.",5,null],[13,"Stop2","","Two stop bits.",5,null],[4,"FlowControl","","Flow control modes.",null,null],[13,"FlowNone","","No flow control.",6,null],[13,"FlowSoftware","","Flow control using XON/XOFF bytes.",6,null],[13,"FlowHardware","","Flow control using RTS/CTS signals.",6,null],[5,"open","","A convenience function for opening a native serial port.",null,{"inputs":[{"name":"t"}],"output":{"name":"result"}}],[0,"prelude","","A module that exports traits that are useful to have in scope.",null,null],[0,"posix","","Serial port implementation for POSIX-compliant operating systems.",null,null],[3,"TTYPort","serial::posix","A TTY-based serial port implementation.",null,null],[3,"TTYSettings","","Serial port settings for TTY devices.",null,null],[11,"open","","Opens a TTY device as a serial port.",7,{"inputs":[{"name":"ttyport"},{"name":"path"}],"output":{"name":"result"}}],[11,"drop","","",7,{"inputs":[{"name":"ttyport"}],"output":null}],[11,"as_raw_fd","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"rawfd"}}],[11,"read","","",7,null],[11,"write","","",7,null],[11,"flush","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"result"}}],[11,"read_settings","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"result"}}],[11,"write_settings","","",7,{"inputs":[{"name":"ttyport"},{"name":"ttysettings"}],"output":{"name":"result"}}],[11,"timeout","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"duration"}}],[11,"set_timeout","","",7,{"inputs":[{"name":"ttyport"},{"name":"duration"}],"output":{"name":"result"}}],[11,"set_rts","","",7,{"inputs":[{"name":"ttyport"},{"name":"bool"}],"output":{"name":"result"}}],[11,"set_dtr","","",7,{"inputs":[{"name":"ttyport"},{"name":"bool"}],"output":{"name":"result"}}],[11,"read_cts","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"result"}}],[11,"read_dsr","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"result"}}],[11,"read_ri","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"result"}}],[11,"read_cd","","",7,{"inputs":[{"name":"ttyport"}],"output":{"name":"result"}}],[11,"clone","","",8,{"inputs":[{"name":"ttysettings"}],"output":{"name":"ttysettings"}}],[11,"baud_rate","","",8,{"inputs":[{"name":"ttysettings"}],"output":{"name":"option"}}],[11,"char_size","","",8,{"inputs":[{"name":"ttysettings"}],"output":{"name":"option"}}],[11,"parity","","",8,{"inputs":[{"name":"ttysettings"}],"output":{"name":"option"}}],[11,"stop_bits","","",8,{"inputs":[{"name":"ttysettings"}],"output":{"name":"option"}}],[11,"flow_control","","",8,{"inputs":[{"name":"ttysettings"}],"output":{"name":"option"}}],[11,"set_baud_rate","","",8,{"inputs":[{"name":"ttysettings"},{"name":"baudrate"}],"output":{"name":"result"}}],[11,"set_char_size","","",8,{"inputs":[{"name":"ttysettings"},{"name":"charsize"}],"output":null}],[11,"set_parity","","",8,{"inputs":[{"name":"ttysettings"},{"name":"parity"}],"output":null}],[11,"set_stop_bits","","",8,{"inputs":[{"name":"ttysettings"},{"name":"stopbits"}],"output":null}],[11,"set_flow_control","","",8,{"inputs":[{"name":"ttysettings"},{"name":"flowcontrol"}],"output":null}],[6,"Result","serial","A type for results generated by interacting with serial ports.",null,null],[6,"SystemPort","","A convenience type alias for the system's native serial port type.",null,null],[8,"SerialDevice","","A trait for implementing serial devices.",null,null],[16,"Settings","","A type that implements the settings for the serial port device.",9,null],[10,"read_settings","","Returns the device's current settings.",9,{"inputs":[{"name":"serialdevice"}],"output":{"name":"result"}}],[10,"write_settings","","Applies new settings to the serial device.",9,{"inputs":[{"name":"serialdevice"},{"name":"settings"}],"output":{"name":"result"}}],[10,"timeout","","Returns the current timeout.",9,{"inputs":[{"name":"serialdevice"}],"output":{"name":"duration"}}],[10,"set_timeout","","Sets the timeout for future I/O operations.",9,{"inputs":[{"name":"serialdevice"},{"name":"duration"}],"output":{"name":"result"}}],[10,"set_rts","","Sets the state of the RTS (Request To Send) control signal.",9,{"inputs":[{"name":"serialdevice"},{"name":"bool"}],"output":{"name":"result"}}],[10,"set_dtr","","Sets the state of the DTR (Data Terminal Ready) control signal.",9,{"inputs":[{"name":"serialdevice"},{"name":"bool"}],"output":{"name":"result"}}],[10,"read_cts","","Reads the state of the CTS (Clear To Send) control signal.",9,{"inputs":[{"name":"serialdevice"}],"output":{"name":"result"}}],[10,"read_dsr","","Reads the state of the DSR (Data Set Ready) control signal.",9,{"inputs":[{"name":"serialdevice"}],"output":{"name":"result"}}],[10,"read_ri","","Reads the state of the RI (Ring Indicator) control signal.",9,{"inputs":[{"name":"serialdevice"}],"output":{"name":"result"}}],[10,"read_cd","","Reads the state of the CD (Carrier Detect) control signal.",9,{"inputs":[{"name":"serialdevice"}],"output":{"name":"result"}}],[8,"SerialPort","","A trait for serial port devices.",null,null],[10,"timeout","","Returns the current timeout.",10,{"inputs":[{"name":"serialport"}],"output":{"name":"duration"}}],[10,"set_timeout","","Sets the timeout for future I/O operations.",10,{"inputs":[{"name":"serialport"},{"name":"duration"}],"output":{"name":"result"}}],[10,"configure","","Configures a serial port device.",10,{"inputs":[{"name":"serialport"},{"name":"portsettings"}],"output":{"name":"result"}}],[10,"reconfigure","","Alter the serial port's configuration.",10,{"inputs":[{"name":"serialport"},{"name":"fn"}],"output":{"name":"result"}}],[10,"set_rts","","Sets the state of the RTS (Request To Send) control signal.",10,{"inputs":[{"name":"serialport"},{"name":"bool"}],"output":{"name":"result"}}],[10,"set_dtr","","Sets the state of the DTR (Data Terminal Ready) control signal.",10,{"inputs":[{"name":"serialport"},{"name":"bool"}],"output":{"name":"result"}}],[10,"read_cts","","Reads the state of the CTS (Clear To Send) control signal.",10,{"inputs":[{"name":"serialport"}],"output":{"name":"result"}}],[10,"read_dsr","","Reads the state of the DSR (Data Set Ready) control signal.",10,{"inputs":[{"name":"serialport"}],"output":{"name":"result"}}],[10,"read_ri","","Reads the state of the RI (Ring Indicator) control signal.",10,{"inputs":[{"name":"serialport"}],"output":{"name":"result"}}],[10,"read_cd","","Reads the state of the CD (Carrier Detect) control signal.",10,{"inputs":[{"name":"serialport"}],"output":{"name":"result"}}],[8,"SerialPortSettings","","A trait for objects that implement serial port configurations.",null,null],[10,"baud_rate","","Returns the current baud rate.",11,{"inputs":[{"name":"serialportsettings"}],"output":{"name":"option"}}],[10,"char_size","","Returns the character size.",11,{"inputs":[{"name":"serialportsettings"}],"output":{"name":"option"}}],[10,"parity","","Returns the parity-checking mode.",11,{"inputs":[{"name":"serialportsettings"}],"output":{"name":"option"}}],[10,"stop_bits","","Returns the number of stop bits.",11,{"inputs":[{"name":"serialportsettings"}],"output":{"name":"option"}}],[10,"flow_control","","Returns the flow control mode.",11,{"inputs":[{"name":"serialportsettings"}],"output":{"name":"option"}}],[10,"set_baud_rate","","Sets the baud rate.",11,{"inputs":[{"name":"serialportsettings"},{"name":"baudrate"}],"output":{"name":"result"}}],[10,"set_char_size","","Sets the character size.",11,{"inputs":[{"name":"serialportsettings"},{"name":"charsize"}],"output":null}],[10,"set_parity","","Sets the parity-checking mode.",11,{"inputs":[{"name":"serialportsettings"},{"name":"parity"}],"output":null}],[10,"set_stop_bits","","Sets the number of stop bits.",11,{"inputs":[{"name":"serialportsettings"},{"name":"stopbits"}],"output":null}],[10,"set_flow_control","","Sets the flow control mode.",11,{"inputs":[{"name":"serialportsettings"},{"name":"flowcontrol"}],"output":null}],[11,"eq","","",1,{"inputs":[{"name":"errorkind"},{"name":"errorkind"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"errorkind"},{"name":"errorkind"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"errorkind"}],"output":{"name":"errorkind"}}],[11,"fmt","","",1,{"inputs":[{"name":"errorkind"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"fmt","","",12,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new","","",12,{"inputs":[{"name":"error"},{"name":"errorkind"},{"name":"t"}],"output":{"name":"self"}}],[11,"kind","","Returns the corresponding `ErrorKind` for this error.",12,{"inputs":[{"name":"error"}],"output":{"name":"errorkind"}}],[11,"fmt","","",12,{"inputs":[{"name":"error"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",12,{"inputs":[{"name":"error"}],"output":{"name":"str"}}],[11,"from","","",12,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"from","std::io::error","",13,{"inputs":[{"name":"error"},{"name":"error"}],"output":{"name":"error"}}],[11,"eq","serial","",2,{"inputs":[{"name":"baudrate"},{"name":"baudrate"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"baudrate"},{"name":"baudrate"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"baudrate"}],"output":{"name":"baudrate"}}],[11,"fmt","","",2,{"inputs":[{"name":"baudrate"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_speed","","Creates a `BaudRate` for a particular speed.",2,{"inputs":[{"name":"baudrate"},{"name":"usize"}],"output":{"name":"baudrate"}}],[11,"speed","","Returns the baud rate as an integer.",2,{"inputs":[{"name":"baudrate"}],"output":{"name":"usize"}}],[11,"eq","","",3,{"inputs":[{"name":"charsize"},{"name":"charsize"}],"output":{"name":"bool"}}],[11,"ne","","",3,{"inputs":[{"name":"charsize"},{"name":"charsize"}],"output":{"name":"bool"}}],[11,"clone","","",3,{"inputs":[{"name":"charsize"}],"output":{"name":"charsize"}}],[11,"fmt","","",3,{"inputs":[{"name":"charsize"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",4,{"inputs":[{"name":"parity"},{"name":"parity"}],"output":{"name":"bool"}}],[11,"ne","","",4,{"inputs":[{"name":"parity"},{"name":"parity"}],"output":{"name":"bool"}}],[11,"clone","","",4,{"inputs":[{"name":"parity"}],"output":{"name":"parity"}}],[11,"fmt","","",4,{"inputs":[{"name":"parity"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",5,{"inputs":[{"name":"stopbits"},{"name":"stopbits"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"stopbits"},{"name":"stopbits"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"stopbits"}],"output":{"name":"stopbits"}}],[11,"fmt","","",5,{"inputs":[{"name":"stopbits"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",6,{"inputs":[{"name":"flowcontrol"},{"name":"flowcontrol"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"flowcontrol"},{"name":"flowcontrol"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"flowcontrol"}],"output":{"name":"flowcontrol"}}],[11,"fmt","","",6,{"inputs":[{"name":"flowcontrol"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"portsettings"},{"name":"portsettings"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"portsettings"},{"name":"portsettings"}],"output":{"name":"bool"}}],[11,"clone","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"portsettings"}}],[11,"fmt","","",0,{"inputs":[{"name":"portsettings"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"default","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"self"}}],[11,"baud_rate","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"option"}}],[11,"char_size","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"option"}}],[11,"parity","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"option"}}],[11,"stop_bits","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"option"}}],[11,"flow_control","","",0,{"inputs":[{"name":"portsettings"}],"output":{"name":"option"}}],[11,"set_baud_rate","","",0,{"inputs":[{"name":"portsettings"},{"name":"baudrate"}],"output":{"name":"result"}}],[11,"set_char_size","","",0,{"inputs":[{"name":"portsettings"},{"name":"charsize"}],"output":null}],[11,"set_parity","","",0,{"inputs":[{"name":"portsettings"},{"name":"parity"}],"output":null}],[11,"set_stop_bits","","",0,{"inputs":[{"name":"portsettings"},{"name":"stopbits"}],"output":null}],[11,"set_flow_control","","",0,{"inputs":[{"name":"portsettings"},{"name":"flowcontrol"}],"output":null}]],"paths":[[3,"PortSettings"],[4,"ErrorKind"],[4,"BaudRate"],[4,"CharSize"],[4,"Parity"],[4,"StopBits"],[4,"FlowControl"],[3,"TTYPort"],[3,"TTYSettings"],[8,"SerialDevice"],[8,"SerialPort"],[8,"SerialPortSettings"],[3,"Error"],[3,"Error"]]};
initSearch(searchIndex);
