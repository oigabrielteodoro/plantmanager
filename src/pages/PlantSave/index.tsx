import React, { useState } from 'react';

import { Alert, Platform } from 'react-native';

import { useRoute } from '@react-navigation/core';

import { format, isBefore } from 'date-fns';

import DateTimePicker, { Event } from '@react-native-community/datetimepicker';

import { Button } from '../../components/Button';

import waterdropImg from '../../assets/waterdrop.png';

import { PlantProps, savePlant } from '../../libs/storage';

import { Container, PlantInfo, PlantImage, PlantName, PlantAbout, Controller, TipContainer, TipImage, TipText, AlertLabel, DateTimerPickerButton, DateTimerPickerText } from './styles';

interface Params {
  plant: PlantProps;
}

export function PlantSave() {
  const [dateTimeSelected, setDateTimeSelected] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();

  const { plant } = route.params as Params;

  function handleChangeTime(_: Event, dateTime?: Date) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldState => !oldState);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setDateTimeSelected(new Date());
      return Alert.alert('Escolha uma hora no futuro!');
    }

    if (dateTime) {
      setDateTimeSelected(dateTime);
    }
  }

  function handleOpenDatetimePickerForAndroid() {
    setShowDatePicker(oldState => !oldState);
  }

  async function handleSave() {
    try {
      await savePlant({
        ...plant,
        dateTimeNotification: dateTimeSelected,
      });
    } catch {
      Alert.alert('Não foi possível salvar. 😢');
    }
  }

  return (
    <Container>
      <PlantInfo>
        <PlantImage uri={plant.photo} />
        <PlantName>{plant.name}</PlantName>
        <PlantAbout>
          {plant.about}
        </PlantAbout>
      </PlantInfo>
      <Controller>
        <TipContainer>
          <TipImage source={waterdropImg} />
          <TipText>{plant.water_tips}</TipText>
        </TipContainer>

        <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

        {showDatePicker && (
          <DateTimePicker 
            value={dateTimeSelected} 
            mode="time" 
            display="spinner" 
            onChange={handleChangeTime} 
          />
        )}

        {Platform.OS === 'android' && (
          <DateTimerPickerButton onPress={() => handleOpenDatetimePickerForAndroid()}>
            <DateTimerPickerText>{`Mudar ${format(dateTimeSelected, 'HH:mm')}`}</DateTimerPickerText>
          </DateTimerPickerButton>
        )}

        <Button 
          title="Cadastrar planta" 
          onPress={handleSave}
        />
      </Controller>
    </Container>
  )
}