pragma solidity ^0.4.0;
contract Lottery{
    address public manager;
    address public lastWinner;
    address [] public players;

    function Lottery() public{
        manager = msg.sender;
    }
    function enter() public payable{
        require(msg.value >.01 ether);
        players.push(msg.sender);
    }
    function random() private view returns (uint){
        return  uint(keccak256(block.difficulty,now,players));

    }
    function pickWinner()  restricted public{
        uint index = random() % players.length;
        players[index].transfer(this.balance);
        lastWinner = players[index];
        players = new address[](0);
    }
    function getPlayers() public view returns (address[]){
        return players;

    }
    modifier restricted(){
        require(msg.sender == manager);
        _;

    }

}