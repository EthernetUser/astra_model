import { TaskProvider, DoneTaskProvider, OthersTaskProvider } from './hooks/task.hook'
import { MessageProvider } from './hooks/message.hook'
import React from "react";


export const GlobalProvider = ({ children }) => {

    return (
        <MessageProvider>
            <TaskProvider>
                <DoneTaskProvider>
                    <OthersTaskProvider>
                        {children}
                    </OthersTaskProvider>
                </DoneTaskProvider>
            </TaskProvider>
        </MessageProvider>
    )
}
