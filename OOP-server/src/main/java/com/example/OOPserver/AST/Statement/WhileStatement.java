package com.example.OOPserver.AST.Statement;

import com.example.OOPserver.AST.Expression.Expression;
import com.example.OOPserver.ErrorExcep.EvalError;
import com.example.OOPserver.GameState.Player;

public class WhileStatement implements Statement {
    private Expression condition;
    private Statement statement;

    public WhileStatement(Expression condition, Statement statement){
        this.condition = condition;
        this.statement = statement;
    }

    public void prettyPrint(StringBuilder s) {
        s.append("while ( ");
        this.condition.prettyPrint(s);
        s.append(" ) ");
        this.statement.prettyPrint(s);
    }

    public boolean eval(Player player) throws EvalError {
        double e = this.condition.eval(player);
        for (int counter = 0; counter < 10000 && e > 0; counter++) {
            if(!this.statement.eval(player)) return false;
            e = this.condition.eval(player);
        }
        return true;
    }
}
