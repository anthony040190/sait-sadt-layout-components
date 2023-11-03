/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
    SafeAreaView,
    StatusBar
} from 'react-native';
import ToDoList from './todo-list';
import ToDoForm from './todo-form';



export default function App() {
    return (
        <SafeAreaView>

            <ToDoList />

            <ToDoForm />

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}