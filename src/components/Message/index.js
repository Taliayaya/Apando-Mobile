import React, { useState } from 'react';
import { Text, View, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import Markdown, { MarkdownIt } from 'react-native-markdown-display';
import math from 'markdown-it-new-katex';
import katex from 'katex';

const markdownItInstance = MarkdownIt().use(math, {
    engine: katex,
    delimiters: 'dollars',
});

export default ({ message, username, timestamp, repeat }) => {
    const padding = repeat ? styles.repeat : styles.noRepeat;
    const [showMore, setShowMore] = useState(false);

    return (
        <View
            style={[styles.container, padding]}
            onLongPress={() => Alert.alert('hello')}
        >
            <View style={styles.vertical}>
                {!repeat && (
                    <View>
                        <Avatar.Image
                            size={48}
                            source={{
                                uri: `https://i.pinimg.com/564x/14/bf/3a/14bf3a1db49d705eb411e382ce3b92ff.jpg`,
                            }}
                        />
                    </View>
                )}

                <View style={[styles.horizontal, repeat && { marginLeft: 58 }]}>
                    {!repeat && (
                        <Text>
                            {username}{' '}
                            <Text style={styles.timestamp}>{timestamp}</Text>
                        </Text>
                    )}
                    <Markdown
                        debugPrintTree
                        markdownit={markdownItInstance}
                        rules={{
                            math_block: (node, children, parent, styles) => {
                                console.log(node, children, parent, styles);
                                return (
                                    <Text key={node.key}>
                                        Math Expression Not Yet Supported on
                                        Mobile
                                    </Text>
                                );
                            },
                        }}
                    >
                        {message}
                    </Markdown>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    timestamp: {
        fontWeight: '200',
        fontSize: 12,
    },
    horizontal: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 10,
    },
    vertical: {
        display: 'flex',
        flexDirection: 'row',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    repeat: {
        paddingTop: 0,
        paddingLeft: 10,
    },
    noRepeat: {
        paddingTop: 10,
        paddingLeft: 10,
    },
});
