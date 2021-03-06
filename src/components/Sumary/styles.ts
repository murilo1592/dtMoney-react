import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); //3 colunas de tamanhos iguais
    gap: 2rem;
    margin-top: -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;  // por padrão strong não se comporta como div
            margin-top: 1rem;
            font-size: 2rem; //32px
            font-weight: 500;
            line-height: 3rem;
        }

        &.boxTotal{
            background: var(--green);
            color: var(--shape);
        }
    }
`