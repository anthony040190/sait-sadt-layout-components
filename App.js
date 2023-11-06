/**
 * My To Do List App
 *
 * @format
 */
"use client"
import React from 'react';
import {
    SafeAreaView,
    StatusBar
} from 'react-native';
import ToDoList from './todo-list';
import ToDoForm from './todo-form';
import { useState } from 'react';



export default function App() {

    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog'
    ])

    return (
        <SafeAreaView>

            <ToDoList tasks={tasks} />

            <ToDoForm />

            <StatusBar style="auto" />
        </SafeAreaView>
    );
}