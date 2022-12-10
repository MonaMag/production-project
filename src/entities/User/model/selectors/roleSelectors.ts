import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { UserRole } from '../consts/userConsts';

// в этом селекторе достаю весь массив ролей
export const getUserRoles = (state: StateSchema) => state.user.authData?.roles;
// Зачастую проверяем является ли пользователь админом или менеджером
// и чтобы каждый раз не пробегать по массиву ролей и не проверять,
// с помощью реселект мемоизируем получение списка ролей и уже внутри селектора проверяем роль пользователя
export const isUserAdmin = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.ADMIN)));
export const isUserManager = createSelector(getUserRoles, (roles) => Boolean(roles?.includes(UserRole.MANAGER)));
