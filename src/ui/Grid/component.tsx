import React from "react";
import styled from "styled-components";

import { Column } from "../Column";
import { Card } from "../Card";
import { AddButton } from "../AddButton";

const GridComponent: React.FC = () => {
  return (
    <GridWrapper>
      <Column>
        <Title>Название</Title>
        <div className={`wrapperContainer`}>
          <Card>одПройти курс по Reactо</Card>
          <Card>
            Записаться на курсы английского языка, чтобы уехать жить в Лондон
          </Card>
          <Card>Собрать портфолио</Card>
          <Card>Сделать бекенд своего сайта на node.js</Card>
          <Card>
            Записаться в мотошколу. Хотя немного страшновато, конечно. Друзья и
            родители против, но очень хочется. Но кого я обманываю, уже 2 года
            решаюсь на этот шаг 😢 Еще и друзья будут хрустиком называть. В
            общем, хотя бы подумать над этим.
          </Card>
          <Card>Нет, я серьезный человек, иду в мотошколу. Записываюсь!</Card>
        </div>
        <AddButton />
      </Column>
      <Column>
        <Title>Название</Title>
        <div className={`wrapperContainer`}>
          <Card>одПройти курс по Reactо</Card>
          <Card>
            Записаться на курсы английского языка, чтобы уехать жить в Лондон
          </Card>
          <Card>Собрать портфолио</Card>
        </div>
        <AddButton />
      </Column>
      <AddButton column />
    </GridWrapper>
  );
};

const GridWrapper = styled.main`
  display: flex;
  margin: 20px;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-family: ${props => props.theme.fontFamily};
  line-height: ${props => props.theme.typography.lineHeight};
  font-size: ${props => props.theme.typography.fontSize};
  color: ${props => props.theme.colors.main};
  fontweight: bold;
  margin: 0;
  margin-bottom: 12px;
`;

export const Grid = GridComponent;
