import { useFetch } from '../hooks/useFetch'

export const getAllRegisters = () => {

    const { data, isLoading, hasError } = useFetch('http://www.localhost:8080/api/registers');

    if (!isLoading) return data;

}