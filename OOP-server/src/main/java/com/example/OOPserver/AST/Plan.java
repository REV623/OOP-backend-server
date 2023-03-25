package com.example.OOPserver.AST;

import com.example.OOPserver.AST.Statement.Statement;
import com.example.OOPserver.ErrorExcep.EvalError;
import com.example.OOPserver.GameState.Player;

import java.util.LinkedList;

public class Plan implements Node{
    private LinkedList<Statement> statementList;

    public Plan(LinkedList<Statement> list){
        this.statementList = list;
    }

    public void prettyPrint(StringBuilder s) {
        for (Statement statement : this.statementList){
            statement.prettyPrint(s);
            s.append("\n");
        }
    }

    public void eval(Player player) throws EvalError {
        for (Statement statement : this.statementList){
            if(!statement.eval(player)) return;
        }
    }
}
