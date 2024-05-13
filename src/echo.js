import Echo from 'laravel-echo';
import axios from '@/axios';

export function initializeEcho() {

    return new Echo({
        broadcaster: 'reverb',
        key: 'ykoqn4dupoltad6jty20',
        wsHost: "mateodevelopment.online/websocket",
        wsPort: 8080,
        forceTLS: false,
        encrypted: true,
        disableStats: true,
        authorizer: (channel, options) => {
            return {
                authorize: (socketId, callback) => {
                    axios.post('broadcasting/auth', {
                        socket_id: socketId,
                        channel_name: channel.name
                    })
                        .then(response => {
                            callback(false, response.data);
                        })
                        .catch(error => {
                            callback(true, error);
                        });
                }
            };
        },
    });
}