package dev.bug.multiplication.challenge;

import lombok.Value;

@Value(staticConstructor = "of")
public class ChallengeAttemptDto {

    int factorA;
    int factorB;
    String userAlias;
    int guess;
}
