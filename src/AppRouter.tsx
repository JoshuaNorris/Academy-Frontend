// AppRouter.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BookPage from './pages/BookPage/BookPage';
import BooksOverviewPage from './pages/BookOverviewPage/BookOverviewPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import NotFoundPage from './pages/NotFoundPage';
const { BASE_URL } = import.meta.env;

const AppRouter: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={`${BASE_URL}/`} element={<HomePage />} />
      <Route path={`${BASE_URL}/book/:title`} element={<BookPage />} />
      <Route path={`${BASE_URL}/books`} element={<BooksOverviewPage />} />
      <Route path={`${BASE_URL}/login`} element={<LoginPage />} />
      <Route path={`${BASE_URL}/register`} element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
