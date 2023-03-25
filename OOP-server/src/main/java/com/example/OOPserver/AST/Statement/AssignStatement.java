package com.example.OOPserver.AST.Statement;

import com.example.OOPserver.AST.Expression.Expression;
import com.example.OOPserver.AST.Expression.Identifier;
import com.example.OOPserver.ErrorExcep.EvalError;
import com.example.OOPserver.GameState.Player;

public class AssignStatement implements Statement {
    private static final String[] specialVar = {"rows", "cols", "currow", "curcol", "budget", "deposit", "int", "maxdeposit", "random"};
    private Identifier variable;
    private Expression expression;

    public AssignStatement(Identifier variable, Expression expression){
        this.variable = variable;
        this.expression = expression;
    }

    public void prettyPrint(StringBuilder s) {
        this.variable.prettyPrint(s);
        s.append(" = ");
        this.expression.prettyPrint(s);
    }

    public boolean eval(Player player) throws EvalError {
        String var = this.variable.getName();
        for(String sv : specialVar){
            if(var.equals(sv)) return true;
        }
        player.variableSet.put(var, this.expression.eval(player));
        return true;
    }
}
