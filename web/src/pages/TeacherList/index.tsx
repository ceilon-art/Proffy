import React, { FormEvent, useState } from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';

import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';

import { Container, Formulary, Main } from './style';

const TeacherList: React.FC = () => {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers (e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params:{
                subject,
                week_day,
                time,
            }
        });

        setTeachers(response.data);
    }

    return (
        <Container>
            <PageHeader title="Estes são os proffys disponíveis.">
                <Formulary id="search-teachers" onClick={searchTeachers}>
                    <Select 
                        name='subject' 
                        label='Matéria'
                        value={subject}
                        className="teacherList"
                        onChange={(e) => {
                            setSubject(e.target.value)
                        }}
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'História', label: 'História' },
                            { value: 'Sociologia', label: 'Sociologia' },
                            { value: 'Português', label: 'Português' },
                        ]}
                    />

                    <Select 
                        name='week_day' 
                        label='Dia da semana'
                        value={week_day}
                        className="teacherList"
                        onChange={(e) => {
                            setWeekDay(e.target.value)
                        }}
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />
                    <Input 
                        name='time' 
                        label='Hora' 
                        value={time}
                        className="teacherList"
                        onChange={(e) => {
                            setTime(e.target.value)
                        }}    
                    />

                    <button type="submit">
                        Buscar
                    </button>
                </Formulary>
            </PageHeader>

            <Main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} />;
                })}
            </Main>
        </Container>
    )
};

export default TeacherList;