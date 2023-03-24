import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity} from 'react-native';
import styles from './assets/styles/styles';

export default function App() {
  const [identificacion, setIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [observacion, setObservacion] = useState('');
  const [definitiva, setDefinitiva] = useState(0);
  const [esValido, setEsvalido] = useState(true);
  const [notas, setNotas] = useState([]);
  
  const calcularDefinitiva = () => {
    const nota1Num = parseFloat(nota1);
    const nota2Num = parseFloat(nota2);
    const nota3Num = parseFloat(nota3);
    if (isNaN(nota1Num) || isNaN(nota2Num) || isNaN(nota3Num)) {
      setEsvalido(false);
      setObservacion('Ingrese Notas Correctas');
      return;
    }
    if (nota1Num < 0 || nota1Num > 5 || nota2Num < 0 || nota2Num > 5 || nota3Num < 0 || nota3Num > 5) {
      setEsvalido(false);
      setObservacion('Debe estar entre 0 y 5');
      return;
    }

    const definitivaNum = (nota1Num * 0.3) + (nota2Num * 0.35) + (nota3Num * 0.35);
    setDefinitiva(definitivaNum.toFixed(2));

    setNota1(nota1Num);
    setNota2(nota2Num);
    setNota3(nota3Num);

    let mensaje = '';
    if (definitivaNum >= 3.0) {
      setEsvalido(true);
      mensaje = 'Aprueba';
    } else if (definitivaNum >= 2.0 && definitivaNum < 2.95) {
      setEsvalido(false);
      mensaje = 'Habilita';
    } else {
      setEsvalido(false);
      mensaje = 'Reprueba';
    }

    const nota = {
      identificacion: identificacion,
      nombre: nombre,
      asignatura: asignatura,
      nota1: nota1,
      nota2: nota2,
      nota3: nota3,
      definitiva: definitivaNum,
      observacion: mensaje,
    };

    setNotas([...notas, nota]);
    setObservacion(mensaje);
  };
  
  const limpiarCampos = () => {
    setIdentificacion('');
    setNombre('');
    setAsignatura('');
    setNota1('');
    setNota2('');
    setNota3('');
    setDefinitiva('');
    setObservacion('');
    setEsvalido(true);
  };
  
  const buscarNota = () => {
    const nota = notas.find(nota => nota.identificacion === identificacion);
    if (nota) {
      setNombre(nota.nombre);
      setAsignatura(nota.asignatura);
      setNota1(nota.nota1.toString());
      setNota2(nota.nota2.toString());
      setNota3(nota.nota3.toString());
      setDefinitiva(nota.definitiva.toString());
      setObservacion(nota.observacion.toString());
      
      if(nota.definitiva > 3){
        setEsvalido(true);
      }
      else
      {
        setEsvalido(false);
      }
    } else {
      setObservacion('No existe el documento');
    }
  };
  
  return (
    <View style={styles.container}>
      
        <Image source={require('./assets/images/bannergato.jpg')} style={styles.banner} />

        <h2 style={styles.titularText}>Sistema de notas</h2>

        <Text style={[styles.subtituleText]}>Identificación:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setIdentificacion}
          value={identificacion}
        />
        <Text style={[styles.subtituleText]}>Nombre:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setNombre}
          value={nombre}
        />
        <Text style={[styles.subtituleText]}>Asignatura:</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setAsignatura}
          value={asignatura}
        />
        <Text style={[styles.subtituleText]}>Momento 1 (30%):</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setNota1}
          value={nota1}
        />
        <Text style={[styles.subtituleText]}>Momento 2 (35%):</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setNota2}
          value={nota2}
        />
        <Text style={[styles.subtituleText]}>Momento 3 (35%):</Text>
        <TextInput 
          style={styles.input}
          onChangeText={setNota3}
          value={nota3}
        />

        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: '10px'}}>
          <Text style={[styles.subtituleText]}>Definitiva:</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: '10px'}}>
          <Text>{definitiva}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', padding: '10px'}}>
          <Text style={[styles.subtituleText, {color: esValido ? 'green' : 'red'}]}>Observación: {observacion}</Text>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center'}}>  
          <TouchableOpacity style={[styles.button, {backgroundColor:'#FFBD62'}]} title="Calcular" onPress={calcularDefinitiva}>
            <Text style={styles.textTouchable}>Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, {backgroundColor: '#FF7C5B'}]} title="Limpiar" onPress={limpiarCampos}>
            <Text style={styles.textTouchable}>Limpiar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={[styles.button, {backgroundColor: '#9066FF'}]} title="Buscar" onPress={buscarNota}>
            <Text style={styles.textTouchable}>Buscar</Text>
          </TouchableOpacity>
        </View>
        

      </View>
  );
}