package com.example.OOPserver.AST.Statement;

import com.example.OOPserver.AST.ENUM.Direction;
import com.example.OOPserver.AST.Expression.Expression;
import com.example.OOPserver.ErrorExcep.EvalError;
import com.example.OOPserver.GameState.Player;
import com.example.OOPserver.GameState.Region;

public class AttackCommand implements Statement {
    private Direction direction;
    private Expression expression;

    public AttackCommand(Direction direction, Expression expression){
        this.direction = direction;
        this.expression = expression;
    }

    public void prettyPrint(StringBuilder s) {
        s.append("shoot ");
        s.append(this.direction);
        s.append(" ");
        this.expression.prettyPrint(s);
    }

    public boolean eval(Player player) throws EvalError {
        if(player.getBudget() < player.territory().FEE_CHARGE()) return true;
        player.subBudget(player.territory().FEE_CHARGE());

        double attackCost = this.expression.eval(player);
        if(player.getBudget() < attackCost) return true;
        player.subBudget(attackCost);

        Region target = player.cityCrew.gotoDirection(this.direction);
        if(target.owner == null) return true;
        target.subDeposit(attackCost);
        if(target.getDeposit() < 1) target.loseRegion(target.owner);
        return true;
    }
}
