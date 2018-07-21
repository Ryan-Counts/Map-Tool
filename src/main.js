import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';

import Home from './components/Home.vue';

import CreateCharacter from './components/Character/CreateCharacter.vue';
import DisplayCharacter from './components/Character/DisplayCharacter.vue';
import EditCharacter from './components/Character/EditCharacter.vue';

import CreateClass from './components/Class/CreateClass.vue';
import DisplayClass from './components/Class/DisplayClass.vue';
import EditClass from './components/Class/EditClass.vue';

import CreateAbility from './components/Ability/CreateAbility.vue';
import DisplayAbility from './components/Ability/DisplayAbility.vue';
import EditAbility from './components/Ability/EditAbility.vue';

import CreateArchetype from './components/Archetype/CreateArchetype.vue';
import DisplayArchetype from './components/Archetype/DisplayArchetype.vue';
import EditArchetype from './components/Archetype/EditArchetype.vue';

import CreateSkill from './components/Skill/CreateSkill.vue';
import DisplaySkill from './components/Skill/DisplaySkill.vue';
import EditSkill from './components/Skill/EditSkill.vue';

import CreateSpell from './components/Spell/CreateSpell.vue';
import DisplaySpell from './components/Spell/DisplaySpell.vue';
import EditSpell from './components/Spell/EditSpell.vue';

const routes = [
  {
      name: 'Home',
      path: '/',
      component: Home
  },
  {
        name: 'CreateCharacter',
        path: '/create/character',
        component: CreateCharacter
  },
  {
        name: 'DisplayCharacter',
        path: '/view/character',
        component: DisplayCharacter
  },
  {
        name: 'EditCharacter',
        path: '/edit/char/:id',
        component: EditCharacter
  },
  {
        name: 'CreateClass',
        path: '/create/class',
        component: CreateClass
  },
  {
        name: 'DisplayClass',
        path: '/view/class',
        component: DisplayClass
  },
  {
        name: 'EditClass',
        path: '/edit/class/:id',
        component: EditClass
  },
  {
        name: 'CreateAbility',
        path: '/create/ability',
        component: CreateAbility
  },
  {
        name: 'DisplayAbility',
        path: '/view/ability',
        component: DisplayAbility
  },
  {
        name: 'EditAbility',
        path: '/edit/ability/:id',
        component: EditAbility
  },
  {
        name: 'CreateArchetype',
        path: '/create/archetype',
        component: CreateArchetype
  },
  {
        name: 'DisplayArchetype',
        path: '/view/archetype',
        component: DisplayArchetype
  },
  {
        name: 'EditArchetype',
        path: '/edit/archetype/:id',
        component: EditArchetype
  },
  {
        name: 'CreateSkill',
        path: '/create/skill',
        component: CreateSkill
  },
  {
        name: 'DisplaySkill',
        path: '/view/skill',
        component: DisplaySkill
  },
  {
        name: 'EditSkill',
        path: '/edit/skill/:id',
        component: EditSkill
  },
  {
        name: 'CreateSpell',
        path: '/create/spell',
        component: CreateSpell
  },
  {
        name: 'DisplaySpell',
        path: '/view/spell',
        component: DisplaySpell
  },
  {
        name: 'EditSpell',
        path: '/edit/spell/:id',
        component: EditSpell
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });
new Vue(Vue.util.extend({ router }, App)).$mount('#app');
