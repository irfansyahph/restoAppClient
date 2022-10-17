import React from 'react';
import { Button, Card, Text } from '@rneui/themed';

const CardProduct = (props) => {

    return (
        <Card containerStyle={{ margin: 4, borderRadius: 10 }}>
            <Card.Image source={{ uri: props.data.image }} style={{ height: 140, width: 140, borderRadius: 20 }} />
            <Card.Title style={{ textAlign: "left", fontSize: 18 }}>{props.data.name}</Card.Title>
            <Card.Title style={{ marginVertical: -10, textAlign: "left", fontSize: 13, fontWeight: "100" }} >Rp. {props.data.price}</Card.Title>
            <Button
                buttonStyle={{ borderRadius: 50, borderColor: 'tomato' }}
                titleStyle={{ fontSize: 13, color: 'tomato' }}
                title="Add" 
                type="outline"
                onPress={props.toDetail}
            />
        </Card>
    )
}

export default CardProduct