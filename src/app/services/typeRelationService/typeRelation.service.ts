import { Injectable } from '@angular/core';
import { Individuo } from 'src/app/domain/Individuo';
export interface TypeRelationService {

  getIndividuals()
  getNonIndividuals()
  updateIndividual(individualUpdate: Individuo)
  deleteIndividual(deleteIndividual: Individuo)
  
}
