

// 메인
    function openChat(element, roomName) {
    // 채팅 목록 컨테이너를 왼쪽으로 이동
        document.querySelector('.chat-list-container').classList.add('shifted');

    // 모든 채팅 아이템에서 active 클래스 제거
    const chatItems = document.querySelectorAll('.chat-item');
            chatItems.forEach(item => item.classList.remove('active'));

    // 클릭된 채팅 아이템에 active 클래스 추가
    element.classList.add('active');

    // 채팅방 이름 설정
    document.getElementById('chat-room-name').textContent = roomName;

    // 대화창 활성화
    document.querySelector('.chat-conversation').classList.add('active');
        }
