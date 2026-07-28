//create a context
import {createContext, useState} from 'react'
export const UserDetailsContext = createContext();

//create a data to save logic with provider function
export const UserDetailProvider = ({children}) =>{
    //create a state to initialize a obj from reg page
    const [userDetailData, setUserDetailData] = useState(null);

    //create a state to initialize a obj from selected plan
    const [selectedPlan, setSelectedPlan] = useState(null);
    
    //save the obj from reg page in to state
    const saveUserDetail = (formData) =>{
        setUserDetailData(formData);
    }

    //save the obj from selected a pricing page into state
    const saveSelectDetail = (plan) =>{
        setSelectedPlan(plan);
    }

    //combined object of userdetaildata nd selectedplan
    const getCompleteData = () =>{
        const UserFullData = {
            ...userDetailData,
            plan: selectedPlan
        };
        return UserFullData;
    }


    //create a provider to share a data to component
    return(
        <UserDetailsContext.Provider value={{ userDetailData, saveUserDetail, selectedPlan, saveSelectDetail, getCompleteData }}>
            {children}
        </UserDetailsContext.Provider>
    );
};