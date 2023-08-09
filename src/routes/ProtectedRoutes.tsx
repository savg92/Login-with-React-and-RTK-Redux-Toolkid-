import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from '../app/store';

interface Props {
  children: ReactNode;
}

// this is a component that will be used to protect routes and redirect to login page if user is not logged
const ProtectedRoutes: React.FC<Props> = ({ children }: Props): JSX.Element => {
    const logged = useSelector((state: RootState) => state.user.isLogged);

    return !logged ? <Navigate to='/login' /> : children;
};

export default ProtectedRoutes;