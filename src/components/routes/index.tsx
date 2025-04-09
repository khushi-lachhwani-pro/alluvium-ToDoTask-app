import React from 'react';
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import { Splash } from '@components/splash';
import { Routes } from './Routelist';

const Stack = createNativeStackNavigator();

const TaskList = React.lazy(() => import('@containers/ToDoTaskList'));
const AppNavigator: React.FC = () => {
    return (
        <NavigationContainer>

            <Stack.Navigator initialRouteName='splash'>
                <Stack.Screen
                    name="splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name={Routes.TaskList}
                    options={{
                        headerShown: false
                    }}
                >
                    {(props: any) => <TaskList {...props} />}
                </Stack.Screen>

            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default AppNavigator;