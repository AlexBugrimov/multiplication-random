package dev.bug.multiplication.challenge.web.controller;

import dev.bug.multiplication.challenge.model.ChallengeAttempt;
import dev.bug.multiplication.challenge.model.ChallengeAttemptDto;
import dev.bug.multiplication.challenge.service.ChallengeService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/attempts")
public class ChallengeAttemptController {

    private final ChallengeService challengeService;

    @PostMapping
    public ResponseEntity<ChallengeAttempt> postResult(@RequestBody @Valid ChallengeAttemptDto challengeAttempt) {
        return ResponseEntity.ok(challengeService.verifyAttempt(challengeAttempt));
    }
}
