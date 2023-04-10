import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "../storageConfig";

import { PlayerStorageDTO } from './PlayerStorageDTO';
import { playersGetByGroups } from "./playersGetByGroup";


export async function playerAddByGroup(newPlayer: PlayerStorageDTO, group: string) {
  try {
    const storedPlayers = await playersGetByGroups(group);
    const playerAleadyExist = storedPlayers.filter(player => player.name === newPlayer.name);
    
    if (playerAleadyExist.length > 0) {
      throw new AppError('Está pessoa ja está cadastrada em um time aqui.');
    }

    const storage =   JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION} - ${group}`, storage);
  } catch( error) {
    throw error;
  }
}